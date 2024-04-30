import { IPaymentEntity } from "../../domain/entities/paymentEntity";

export interface IRepositories {
  savePayment: (data: any) => Promise <IPaymentEntity | null> 
  listTickets: (userId: string) => Promise <IPaymentEntity | null>
}