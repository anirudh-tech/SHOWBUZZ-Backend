import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { dependencies } from "../../config/dependencies";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const userRoutes = (dependencies: IDependencies) => {
  const {listUsers,updateStatus} = controllers(dependencies);

  const router = Router();

  router.route("/listUsers").get(listUsers);

  router.route("/updateStatus").post(updateStatus);

  return router;
};
