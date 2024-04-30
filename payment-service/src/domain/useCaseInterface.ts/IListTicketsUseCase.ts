import { IPaymentEntity } from "../entities/paymentEntity";

export interface IListTicketsUseCase {
  execute(userData: string) : Promise <IPaymentEntity | null>
}