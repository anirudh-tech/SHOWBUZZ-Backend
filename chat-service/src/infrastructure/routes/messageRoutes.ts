import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const messageRoutes = (dependencies: IDependencies) => {
  const {sendMessage,allMessage} = controllers(dependencies);

  const router = Router();
  router.route('/send-message').post( sendMessage );

  router.route('/listMessages/:chatId').get( allMessage );





  return router;
};
