import { Router } from "express";
// import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const paymentRoutes = (dependencies: IDependencies) => {
  const {createCheckoutSession, savePayment,listTickets} = controllers(dependencies);

  const router = Router();

  router.route("/create-checkout-session").post(createCheckoutSession);

  router.route("/savePayment").post(savePayment);

  router.route("/listTickets").get(listTickets);

  return router;
};
