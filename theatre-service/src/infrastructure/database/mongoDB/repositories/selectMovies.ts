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

    console.log(selectedDateTimes,
      selectedLanguages,
      selectedFormats,
      movieId,
      theatreId,
      selectedScreens,
      typeof(selectedScreens)
      );
console.log(selectedScreens);
console.log(typeof selectedScreens);


// const theatre = await Theatre.findOne(
//   { 
//     _id: theatreId,
//     "screens.screenName": { $in: selectedScreens } ,
//   },
//   { 
//     $push: {
//       "screens.$[].selectedMovies": selectedMovies
//     }
//   },
//   { new: true }
// );


      // console.log(theatre,'--theatre')
      // if (!theatre) {
      //   throw new Error('Movie already added');
      // }

    const theatre = await Theatre.findById(theatreId);
    const matchingScreens = theatre?.screens.filter((screen) => selectedScreens?.includes(screen.screenName)) as IScreen[];
    console.log(matchingScreens, 'matchingScreens')

    if (!matchingScreens || matchingScreens.length === 0) {
      throw new Error(`No screens found with the provided screenNames`);
    }

    const movieExists = matchingScreens.some((screen: IScreen) =>
      screen.selectedMovies.some((movie) => movie?.movieId?.toString() === movieId)
    );
    console.log(movieExists,'----movie Exist')
    if(movieExists){
      throw new Error('Same Movies Cannot Be Added')
    }
    matchingScreens.forEach(screen => {
      screen.selectedMovies.push({
          movieId,
          selectedDateTimes,
          selectedLanguages,
          selectedFormats
      });
  });

  if (theatre) {
    await theatre.save();
  } else {
    throw new Error('Theatre not found');
  }

  return theatre;

  } catch (error: any) {
    throw new Error(error.message);
  }
};


