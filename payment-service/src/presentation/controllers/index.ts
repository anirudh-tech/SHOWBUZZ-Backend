import { IDependencies } from "../../application/interfaces/IDependencies";
import { allTickets } from "./allTickets";
import { createCheckoutSessionController } from "./createCheckoutSession";
import { getAllPaymentsController } from "./getAllPayments";
import { getAllPaymentsOfTheatre } from "./getAllPaymentsOfTheatre";
import { getAllTicketsInTheatres } from "./getAllTicketsInTheatres";
import { listTicketsController } from "./listTickets";
import { savePaymentController } from "./savePayment";


export const controllers = (dependencies: IDependencies) => {
  return {
      createCheckoutSession: createCheckoutSessionController(dependencies),
      savePayment: savePaymentController(dependencies),
      listTickets: listTicketsController(dependencies),
      allTickets: allTickets(dependencies),
      getAllTicketsInTheatres: getAllTicketsInTheatres(dependencies),
      getAllPayments: getAllPaymentsController(dependencies),
      getAllPaymentsOfTheatre: getAllPaymentsOfTheatre(dependencies)
  }
}