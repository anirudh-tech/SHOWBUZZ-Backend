import { ITheatreEntity } from "../entities";

export interface ITimeDetailsUseCase {
  execute(id:string): Promise<ITheatreEntity | null>
}