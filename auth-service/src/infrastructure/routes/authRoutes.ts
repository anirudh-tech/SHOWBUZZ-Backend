import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
export const authRoutes = (dependencies: IDependencies) => {
    const {signup,login,isExist,logout} = controllers(dependencies);

    const router = Router();

    router.route("/signup")
        .post(signup);

    router.route("/login")
        .post(login);

    router.route("/isExist")
        .get(isExist)

    router.route("/logout")
        .get(logout)
    return router;
}