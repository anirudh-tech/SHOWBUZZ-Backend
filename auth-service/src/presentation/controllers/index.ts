import { IDependencies } from "../../application/interfaces/IDependencies";
import { isExistController } from "./isExist";
import { loginController } from "./login";
import { logoutController } from "./logout";
import { signupController } from "./signup";

export const controllers = (dependencies: IDependencies) => {
    return {
        signup: signupController(dependencies),
        login: loginController(dependencies),
        isExist: isExistController(dependencies),
        logout: logoutController(dependencies),
    }
}