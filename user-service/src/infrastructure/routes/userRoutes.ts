import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const userRoutes = (dependencies: IDependencies) => {
  const {listUsers,updateStatus,listUserWithId, updateUser} = controllers(dependencies);

  const router = Router();

  router.route("/listUsers").get(listUsers);

  router.route("/listUser/:id").get(listUserWithId);

  router.route("/updateStatus").post(updateStatus);

  router.route("/updateUser").post(updateUser);

  return router;
};
