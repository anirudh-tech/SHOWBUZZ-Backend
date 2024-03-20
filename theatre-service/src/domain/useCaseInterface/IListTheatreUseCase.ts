import { ITheatreEntity } from "../entities/theatreEntities";

export interface IListTheatreUseCase{
  execute(): Promise<ITheatreEntity[] | null>;
}