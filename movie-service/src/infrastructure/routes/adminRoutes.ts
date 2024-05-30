import { Request, Response, Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";



export const adminRoutes = (dependencies: IDependencies) => {
  const {
    addTheatreMovie,
    getTheatreMovies,
    findMovie,
    editTheatreMovie,
    deleteMovie,
    getAllMovies,
    addOttMovie,
    getAllOttMovies,
    getMovieData,
    listOttMovies,
    uploadVideo,
    getPlaybackId
  } = controllers(dependencies);

  const router = Router();

  router.route("/addTheatreMovie").post(addTheatreMovie);

  router.route("/listTheatreMovies").get(getTheatreMovies);

  router.route("/listOttMovies").get(listOttMovies);

  router.route("/findMovie/:id").get(findMovie);

  router.route("/editTheatreMovie").post(editTheatreMovie);

  router.route("/deleteMovie").post(deleteMovie);

  router.route("/getAllMovies").get(getAllMovies);

  router.route("/addOttMovie").post(addOttMovie);

  router.route("/getAllOttMovies").get(getAllOttMovies);

  router.route("/getMovieData/:id").get(getMovieData);

  router.route("/uploadVideo").get(uploadVideo);

  router.route("/getPlaybackId").get(getPlaybackId);

  return router;
};
