import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const chatRoutes = (dependencies: IDependencies) => {
  const {createGroup,listGroups,getMessage, addToGroup,allMessage,sendMessage} = controllers(dependencies);

  const router = Router();
  

  router.route('/createGroup').post(createGroup)

  router.route('/listGroups').get(listGroups)

  router.route('/getMessage').post(getMessage)

  router.route('/joinGroup').put(addToGroup)

  router.route('/send-message').post( sendMessage );

  router.route('/listMessages/:chatId').get( allMessage );

  return router;
};
