import { IDependencies } from "../../application/interfaces/IDependencies";
import { theatreDetailsController } from "./theatreDetails";
import { listTheatresController } from "./listTheatre";
import { selectMoviesController } from "./selectMovie";
import { addScreenController } from "./addScreen";
import { allTheatreDetailsController } from "./allTheatreDetails";
import { setSeatLayoutController } from "./setSeatLayout";

export const controllers = (dependencies: IDependencies) => {
  return {
    listTheatres: listTheatresController(dependencies),
    theatreDetails: theatreDetailsController(dependencies),
    selectMovies: selectMoviesController(dependencies),
    addScreen: addScreenController(dependencies),
    allTheatreDetails: allTheatreDetailsController(dependencies),
    setSeatLayout: setSeatLayoutController(dependencies)
  }
}