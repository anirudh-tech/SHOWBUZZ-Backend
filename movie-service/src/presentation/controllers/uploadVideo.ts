import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import Mux from "@mux/mux-node";


export const uploadVideoController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    const mux = new Mux({
      tokenId: "35005113-0bf8-4c73-956c-d49923336d0c",
      tokenSecret:
        "L4MH/JzWvbLKdDToQPvUtagzJHQL07mpoEN/ASlMbI9AHv/qVjnQ82Bxd49VcGjzS6FthgG/PeU",
    });
    
    const { video } = mux;
    try {
      const response = await video.uploads.create({
        cors_origin: "*",
        new_asset_settings: {
          playback_policy: ["public"],
          encoding_tier: "baseline",
        },
      });
      res.send(response);
    } catch (error) {
      
    }
  }
}