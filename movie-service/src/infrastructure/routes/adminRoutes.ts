import { Request, Response, Router } from "express";
import Mux from "@mux/mux-node";
// import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";

const mux = new Mux({
  tokenId: "35005113-0bf8-4c73-956c-d49923336d0c",
  tokenSecret:
    "L4MH/JzWvbLKdDToQPvUtagzJHQL07mpoEN/ASlMbI9AHv/qVjnQ82Bxd49VcGjzS6FthgG/PeU",
});

const { video } = mux;
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
    listOttMovies
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

  router.route("/uploadVideo").get(async (req: Request, res: Response) => {
    const response = await video.uploads.create({
      cors_origin: "*",
      new_asset_settings: {
        playback_policy: ["public"],
        encoding_tier: "baseline",
      },
    });
    res.send(response);
  });

  router.route("/getPlaybackId").get(async (req: Request, res: Response) => {
    const uploadId: any = req.query.uploadId;

    try {
      const upload = await video.uploads.retrieve(uploadId);
      const assetId = upload.asset_id;

      if (!assetId) {
        return res.status(404).send("Asset not found");
      }

      const asset = await video.assets.retrieve(assetId);

      if (asset.playback_ids && asset.playback_ids.length > 0) {
        console.log(
          "🚀 ~ file: adminRoutes.ts:63 ~ router.route ~ asset.playback_ids[0].id:",
          asset.playback_ids[0].id
        );
        res.send({
          playback_id: asset.playback_ids[0].id,
        });
      } else {
        res.status(404).send("Playback ID not found");
      }
    } catch (error) {
      console.error("Error retrieving asset:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  return router;
};
