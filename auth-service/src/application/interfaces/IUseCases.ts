import { ICheckUserEmailUseCase, ILoginUserUseCase, ISignupUserUseCase, IVerifyOtpUseCase } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    signupUserUseCase: (dependencies: IDependencies) => ISignupUserUseCase;
    checkUserEmailUseCase: (dependencies:IDependencies) => ICheckUserEmailUseCase;
    verifyOtpUseCase: (dependencies: IDependencies) => IVerifyOtpUseCase;
    loginUserUseCase: (dependencies: IDependencies) => ILoginUserUseCase;
}