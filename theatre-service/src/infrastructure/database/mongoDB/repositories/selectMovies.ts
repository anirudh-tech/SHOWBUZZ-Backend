import { IProps, IScreen, ISelecetedScreens } from "../../../../application/interfaces/ISelectedMovie";
import { ITheatreEntity } from "../../../../domain/entities";
import { Theatre } from "../models/theatreModel";

export const selectMovies = async ({
  selectedDateTimes,
  selectedLanguages,
  selectedFormats,
  movieId,
  theatreId
}: IProps,selectedScreens: string[]) => {
  try {
    let selectedMovies: any = {
      selectedDateTimes,
      selectedLanguages,
      selectedFormats,
      movieId,
    };

    // console.log(selectedDateTimes,
    //   selectedLanguages,
    //   selectedFormats,
    //   movieId,
    //   theatreId,
    //   selectedScreens,
    //   typeof(selectedScreens)
    //   );
console.log(selectedScreens);
console.log(typeof selectedScreens);


      const theatre = await Theatre.findOneAndUpdate(
        { 
          "screens.screenName": { $in: selectedScreens },
        }
      );

      console.log(theatre,'--theatre')
      if (!theatre) {
        throw new Error('Theatre not found');
      }

    // const theatre:ITheatreEntity | null = await Theatre.findById(theatreId);
    // const matchingScreens = theatre.screens.filter((screen) => selectedScreens?.includes(screen.screenName));

    // if (!matchingScreens || matchingScreens.length === 0) {
    //   throw new Error(`No screens found with the provided screenNames`);
    // }

    // const movieExists = matchingScreens.some((screen) =>
    //   screen.selectedMovies.some((movie) => movie?.movieId?.toString() === movieId)
    // );
    // console.log(movieExists,'----movie Exist')
    // if(movieExists){
    //   throw new Error('Same Movies Cannot Be Added')
    // } else {
    //   console.log(selectedMovies,'selected Movies')
    //   const response = await Theatre.findOneAndUpdate(
    //     { _id: theatreId },
    //     { $set: { screens: theatre.screens } }, // Update the screens array
    //     { new: true }
    //   );
    //   // const response = await Theatre.findByIdAndUpdate(theatreId,{ $push: { selectedMovies } },{ new: true })
    //   console.log('response--------',response,'-----response end');
    //   return response;
    // }




    // for (const screenName of selectedScreens) {
    //   // Find the index of the screen with the matching screenName
    //   const screenIndex = theatre.screens.findIndex((screen) => screen.screenName === screenName);
    //   if (screenIndex === -1) {
    //     throw new Error(`Screen '${screenName}' not found`);
    //   }

    //   // Check if any of the selected movies already exist in the screen's selectedMovies
    //   const screen = theatre.screens[screenIndex];
    //   const movieExists = selectedMovies.some((selectedMovie: any) =>
    //     screen.selectedMovies.some((movie) => movie?.movieId?.toString() === selectedMovie.movieId)
    //   );
    //   if (movieExists) {
    //     throw new Error('Same movies cannot be added to the same screen');
    //   }

    //   // Push the new selected movies to the screen's selectedMovies array
    //   theatre.screens[screenIndex].selectedMovies.push(...selectedMovies);
    // }

    // Save the updated theatre document

  } catch (error: any) {
    throw new Error(error.message);
  }
};


