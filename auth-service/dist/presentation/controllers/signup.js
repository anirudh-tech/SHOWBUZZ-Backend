"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
const signupValidation_1 = require("../../utils/validations/signupValidation");
const hashPassword_1 = require("../../utils/bcrypt/hashPassword");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateOtp_1 = require("../../utils/otp/generateOtp");
const otp_1 = require("../../infrastructure/database/mongoDB/models/otp");
const sendOtp_1 = require("../../utils/otp/sendOtp");
const generatePassword_1 = require("../../utils/password/generatePassword");
const userCreatedProducer_1 = require("../../infrastructure/kafka/producers/userCreatedProducer");
const signupController = (dependencies) => {
    const { useCases: { signupUserUseCase, checkUserEmailUseCase, verifyOtpUseCase }, } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userCredentials = req.body;
            console.log(userCredentials);
            const userExist = yield checkUserEmailUseCase(dependencies).execute(req.body.email);
            // checking if user exist or not
            if (userExist) {
                return res.status(409).send({ error: "E-mail already in use" });
            }
            // checking if user is coming with otp
            //user without otp
            if (!userCredentials.otp && userCredentials.password) {
                const otp = yield (0, generateOtp_1.generateOtp)();
                console.log(otp, "eyeeee");
                let emailExist = yield otp_1.Otp.findOne({ email: userCredentials.email });
                let dbOtp;
                console.log(emailExist, '---------emailExist');
                if (emailExist) {
                    dbOtp = yield otp_1.Otp.findOneAndUpdate({ email: userCredentials.email }, { $set: { otp, createdAt: new Date() } });
                }
                else {
                    dbOtp = yield otp_1.Otp.create({ email: userCredentials.email, otp });
                }
                // send otp to email
                if (dbOtp) {
                    (0, sendOtp_1.sendOtp)(userCredentials.email, otp).then((response) => {
                        console.log(response);
                        return res
                            .status(201)
                            .send({ message: `An OTP has been sent to your email` });
                    });
                }
            }
            else {
                try {
                    let otpVerified = false;
                    // if user has otp
                    if (userCredentials.otp) {
                        const otp = userCredentials === null || userCredentials === void 0 ? void 0 : userCredentials.otp;
                        otpVerified = yield verifyOtpUseCase(dependencies).execute(userCredentials.email, otp);
                    }
                    // to check if it is google signup
                    if (!userCredentials.password) {
                        userCredentials.password = yield (0, generatePassword_1.generatePassword)();
                    }
                    // checking if users otp is verified
                    if (!otpVerified && userCredentials.otp) {
                        throw new Error("Otp is not verified");
                    }
                    else {
                        userCredentials === null || userCredentials === void 0 ? true : delete userCredentials.otp;
                        const { value, error } = signupValidation_1.signupValidation.validate(req.body);
                        if (error) {
                            throw new Error(error.message);
                        }
                        value.password = yield (0, hashPassword_1.hashPassword)(value.password);
                        const result = yield signupUserUseCase(dependencies).execute(value);
                        if (!result) {
                            throw new Error("User creation failed!");
                        }
                        else {
                            let payload = {
                                _id: String(result === null || result === void 0 ? void 0 : result._id),
                                email: result === null || result === void 0 ? void 0 : result.email,
                                role: result === null || result === void 0 ? void 0 : result.role,
                            };
                            const accessToken = jsonwebtoken_1.default.sign(payload, String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: "1h" });
                            res.cookie("user_jwt", accessToken, {
                                httpOnly: true,
                            });
                            console.log(result, '================');
                            res.status(201).json({
                                success: true,
                                user: result,
                                message: "User created!",
                            });
                        }
                        let status;
                        if (result.role == 'theatre') {
                            status = "pending";
                        }
                        else {
                            status = "active";
                        }
                        const addedUser = {
                            _id: result._id,
                            username: result.username,
                            email: result.email,
                            password: result.password,
                            role: result.role,
                            status: status
                        };
                        (0, userCreatedProducer_1.userCreatedProducer)(addedUser);
                    }
                }
                catch (error) {
                    next(error);
                }
            }
        }
        catch (error) {
            next(error);
        }
    });
};
exports.signupController = signupController;
