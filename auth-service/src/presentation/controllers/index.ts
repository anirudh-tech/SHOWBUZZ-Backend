import { IDependencies } from "../../application/interfaces/IDependencies";
import { dependencies } from "../../config/dependencies";
import { signup } from "../../infrastructure/database/mongoDB/repositories";
import { signupController } from "./signup";

export const controllers = (dependencies: IDependencies) => {
    return {
        signup: signupController(dependencies)
    }
}