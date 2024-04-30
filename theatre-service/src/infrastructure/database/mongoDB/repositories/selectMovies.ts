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
    const theatre = await Theatre.findById(theatreId).populate('screens.seatLayoutId')
    const matchingScreens = theatre?.screens.filter((screen) => selectedScreens?.includes(screen.screenName)) as IScreen[];
    console.log(matchingScreens, 'matchingScreens')

    if (!matchingScreens || matchingScreens.length === 0) {
      throw new Error(`No screens found with the provided screenNames`);
    }
    console.log(selectedDateTimes,'selectedTimes------------->')
    const movieExists = matchingScreens.some((screen: IScreen) =>
      screen.selectedMovies.some((movie) => movie?.movieId?.toString() === movieId)
    );
    console.log(movieExists,'----movie Exist')
    matchingScreens.forEach(screen => {
      screen.selectedMovies.push({
        movieId,
        selectedDateTimes,
        selectedLanguages,
        selectedFormats
      });
    });
    console.log(matchingScreens,'----------->')
    matchingScreens.forEach(screen => {
      const seatLayout = screen.seatLayoutId
      screen.selectedMovies.forEach(movie => {
        movie.selectedDateTimes?.forEach(date => {
          date.selectedTimes.forEach(time => { 
            time.seatsAvailable = seatLayout
          })
        })
      })
    })
    if(movieExists){
      throw new Error('Same Movies Cannot Be Added')
    }
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


