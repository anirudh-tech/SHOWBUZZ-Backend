import { ITheatreEntity } from "../../domain/entities/theatreEntities";

export interface IRepositories {
  listTheatres: () => Promise<ITheatreEntity[] | null>
  theatreDetails: (id: string) => Promise<ITheatreEntity | null>
}