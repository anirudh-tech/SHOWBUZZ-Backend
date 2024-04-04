import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependencies } from "../../application/interfaces/IDependencies";
export const theatreRoutes = (dependencies:IDependencies) => {
    const {listTheatres, theatreDetails, selectMovies, addScreen,allTheatreDetails,setSeatLayout} = controllers(dependencies);

    const router = Router();

    router.route("/listTheatresUsingMovieId/:id/:date")
        .get(listTheatres);

    router.route("/theatreDetails/:id")
        .get(theatreDetails);

    router.route("/allTheatreDetails")
        .get(allTheatreDetails);

    router.route("/selectMovies")
        .post(selectMovies);

    router.route("/addScreen")
        .post(addScreen);

    router.route("/setSeatLayout")
        .post(setSeatLayout);

    return router;
}