import { ITheatreEntity } from "../entities";

export interface IAddScreenUseCase {
  execute(name: string, theatreId: string): Promise <ITheatreEntity | null>
}