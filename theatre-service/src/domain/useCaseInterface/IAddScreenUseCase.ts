import { ITheatreEntity } from "../entities";

export interface IAddScreenUseCase {
  execute(screenInput: string,moneyInput: string, theatreId: string): Promise <ITheatreEntity | null>
}