import { Router } from "express";
// import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const adminRoutes = (dependencies: IDependencies) => {
  const { addTheatreMovie, getTheatreMovies, findMovie} = controllers(dependencies);

  const router = Router();

  router.route("/addTheatreMovie").post(addTheatreMovie);

  router.route("/listTheatreMovies").get(getTheatreMovies);

  router.route("/findMovie/:id").get(findMovie);

  return router;
};
