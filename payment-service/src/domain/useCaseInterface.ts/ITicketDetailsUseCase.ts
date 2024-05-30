import { IPaymentEntity } from "../entities/paymentEntity";

export interface ITicketDetailsUseCase{
  execute(id: string): Promise<IPaymentEntity>
}