import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const chatRoutes = (dependencies: IDependencies) => {
  const {createGroup,listGroups,getMessage, addToGroup} = controllers(dependencies);

  const router = Router();
  

  router.route('/createGroup').post(createGroup)

  router.route('/listGroups').get(listGroups)

  router.route('/getMessage').post(getMessage)

  router.route('/joinGroup').put(addToGroup)

  return router;
};
