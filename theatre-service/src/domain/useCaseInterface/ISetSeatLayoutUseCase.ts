import { ITheatreEntity } from "../entities";

export interface ISetSeatLayoutUseCase {
  execute(theatreData:any): Promise<ITheatreEntity | null>
}