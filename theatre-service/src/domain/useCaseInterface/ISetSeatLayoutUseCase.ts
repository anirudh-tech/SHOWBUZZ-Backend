import { ITheatreEntity } from "../entities";

export interface ISetSeatLayoutUseCase {
  execute(theatreData): Promise<ITheatreEntity | null>
}