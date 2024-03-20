import { ITheatreEntity } from "../entities";

export interface ITheatreDetails {
  execute(id: string): Promise <ITheatreEntity | null>
}