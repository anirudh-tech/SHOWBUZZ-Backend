import { IPaymentEntity } from "../../domain/entities/paymentEntity";

export interface IRepositories {
  savePayment: (data: any) => Promise<any | null>;
  listTickets: (userId: string) => Promise<any | null>;
  ticketDetails: (id: string) => Promise<any | null>;
}
