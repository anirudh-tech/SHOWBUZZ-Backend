import { Router } from "express";
// import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const adminRoutes = (dependencies: IDependencies) => {
  const { addTheatreMovie, getTheatreMovies } = controllers(dependencies);

  const router = Router();

  router.route("/addTheatreMovie").post(addTheatreMovie);

  router.route("/listTheatreMovies").get(getTheatreMovies);

  return router;
};
