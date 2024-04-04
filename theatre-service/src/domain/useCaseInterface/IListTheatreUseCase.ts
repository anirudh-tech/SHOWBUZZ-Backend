import { ITheatreEntity } from "../entities/theatreEntities";

export interface IListTheatreUseCase{
  execute(id: string, date: string): Promise<ITheatreEntity[] | null>;
}