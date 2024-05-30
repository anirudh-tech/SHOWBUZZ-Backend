import { Router } from "express";
// import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const paymentRoutes = (dependencies: IDependencies) => {
  const {
    createCheckoutSession,
    savePayment,
    listTickets,
    allTickets,
    getAllTicketsInTheatres,
    getAllPayments,
    getAllPaymentsOfTheatre,
    ticketDetails
  } = controllers(dependencies);

  const router = Router();

  router.route("/create-checkout-session").post(createCheckoutSession);

  router.route("/savePayment").post(savePayment);

  router.route("/listTickets").get(listTickets);

  router.route("/getAllPayments").get(getAllPayments);

  router.route("/allTickets").get(allTickets);

  router.route("/getAllTicketsInTheatres/:id").get(getAllTicketsInTheatres);

  router.route("/getAllPaymentsOfTheatre/:id").get(getAllPaymentsOfTheatre);

  router.route("/ticketDetails/:id").get(ticketDetails)

  return router;
};
