import { ISignupUserUseCase } from "../../domain/useCaseInterface";

export interface IUseCases {
    signupUserUseCase: (dependencies: any) => ISignupUserUseCase;
}