import { IPaymentEntity } from "../entities/paymentEntity";

export interface ISavePaymentUseCase {
  execute(data: any): Promise<IPaymentEntity | null>
}