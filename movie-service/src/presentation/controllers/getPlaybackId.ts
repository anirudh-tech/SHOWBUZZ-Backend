import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import Mux from "@mux/mux-node";

export const getPlaybackIdController = (dependencies: IDependencies) => {

  const mux = new Mux({
    tokenId: "35005113-0bf8-4c73-956c-d49923336d0c",
    tokenSecret:
      "L4MH/JzWvbLKdDToQPvUtagzJHQL07mpoEN/ASlMbI9AHv/qVjnQ82Bxd49VcGjzS6FthgG/PeU",
  });
  
  const { video } = mux;
  
  return async (req: Request, res: Response, next: NextFunction) => {
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
  }
}