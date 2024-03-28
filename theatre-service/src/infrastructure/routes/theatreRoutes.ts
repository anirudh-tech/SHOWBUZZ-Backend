import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const theatreRoutes = (dependencies:IDependencies) => {
    const {listTheatres, theatreDetails, selectMovies, addScreen} = controllers(dependencies);

    const router = Router();

    router.route("/listTheatres")
        .get(listTheatres);

    router.route("/theatreDetails/:id")
        .get(theatreDetails);

    router.route("/selectMovies")
        .post(selectMovies);

    router.route("/addScreen")
        .post(addScreen);

    return router;
}