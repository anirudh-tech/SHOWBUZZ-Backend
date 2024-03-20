import { IDependencies } from "../../application/interfaces/IDependencies";
import { theatreDetailsController } from "./theatreDetails";
import { listTheatresController } from "./listTheatre";

export const controllers = (dependencies: IDependencies) => {
  return {
    listTheatres: listTheatresController(dependencies),
    theatreDetails: theatreDetailsController(dependencies),
  }
}