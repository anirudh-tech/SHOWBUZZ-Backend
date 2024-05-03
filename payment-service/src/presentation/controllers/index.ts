import { IDependencies } from "../../application/interfaces/IDependencies";
import { allTickets } from "./allTickets";
import { createCheckoutSessionController } from "./createCheckoutSession";
import { getAllTicketsInTheatres } from "./getAllTicketsInTheatres";
import { listTicketsController } from "./listTickets";
import { savePaymentController } from "./savePayment";


export const controllers = (dependencies: IDependencies) => {
  return {
      createCheckoutSession: createCheckoutSessionController(dependencies),
      savePayment: savePaymentController(dependencies),
      listTickets: listTicketsController(dependencies),
      allTickets: allTickets(dependencies),
      getAllTicketsInTheatres: getAllTicketsInTheatres(dependencies)
  }
}