import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { signupValidation } from "../../utils/validations/signupValidation";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import jwt from "jsonwebtoken";
import { generateOtp } from "../../utils/otp/generateOtp";
import { Otp } from "../../infrastructure/database/mongoDB/models/otp";
import { sendOtp } from "../../utils/otp/sendOtp";
import { generatePassword } from "../../utils/password/generatePassword";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/userCreatedProducer";

export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { signupUserUseCase, checkUserEmailUseCase, verifyOtpUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userCredentials = req.body;
      console.log(userCredentials);
      const userExist = await checkUserEmailUseCase(dependencies).execute(
        req.body.email
      );

      // checking if user exist or not

      if (userExist) {
        return res.status(409).send({ error: "E-mail already in use" });
      }

      // checking if user is coming with otp

      //user without otp
      if (!userCredentials.otp && userCredentials.password) {
        const otp = await generateOtp();
        console.log(otp, "eyeeee");
        let emailExist = await Otp.findOne({email:userCredentials.email})
        let dbOtp;
        console.log(emailExist,'---------emailExist')
        if(emailExist) {
            dbOtp = await Otp.findOneAndUpdate({email:userCredentials.email},{$set:{otp,createdAt: new Date()}})
        } else {
            dbOtp = await Otp.create({ email: userCredentials.email, otp });
        }

        // send otp to email
        if (dbOtp) {
          sendOtp(userCredentials.email, otp).then((response) => {
            console.log(response);
            return res
              .status(201)
              .send({ message: `An OTP has been sent to your email` });
          });
        }
      } else {
        try {
          let otpVerified = false;

          // if user has otp
          if (userCredentials.otp) {
            const otp = userCredentials?.otp;
            otpVerified = await verifyOtpUseCase(dependencies).execute(
              userCredentials.email,
              otp
            );
          }
          // to check if it is google signup
          if (!userCredentials.password) {
            userCredentials.password = await generatePassword();
          }

          // checking if users otp is verified
          if (!otpVerified && userCredentials.otp) {
            throw new Error("Otp is not verified");
          } else {
            delete userCredentials?.otp
            const { value, error } = signupValidation.validate(req.body);
            if (error) {
              throw new Error(error.message);
            }

            value.password = await hashPassword(value.password);

            const result: any = await signupUserUseCase(dependencies).execute(value);

            if (!result) {
              throw new Error("User creation failed!");
            } else {
              let payload = {
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!,
              };
              const accessToken = jwt.sign(
                payload,
                String(process.env.ACCESS_TOKEN_SECRET),
                { expiresIn: "1h" }
              );

              res.cookie("user_jwt", accessToken, {
                httpOnly: true,
              });
              console.log(result,'================');
              
              res.status(201).json({
                success: true,
                user: result,
                message: "User created!",
              });
            }
            let status;
            if(result.role == 'theatre'){
              status = "pending"
            } else {
              status = "active"
            }
            const addedUser = {
              _id:result._id,
              username:result.username,
              email:result.email,
              password:result.password,
              role: result.role,
              status: status
            }
            userCreatedProducer(addedUser)
          }
        } catch (error: any) {
          next(error)
        }
      }
    } catch (error: any) {
      next(error);
    }
  };
};
