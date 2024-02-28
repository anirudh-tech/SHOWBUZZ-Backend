import { Router } from "express";
import { dependencies } from "../../config/dependencies";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
export const authRoutes = (dependencies: IDependencies) => {
    const {signup} = controllers(dependencies);

    const router = Router();

    router.route("/signup")
        .post(signup);

    return router;
}