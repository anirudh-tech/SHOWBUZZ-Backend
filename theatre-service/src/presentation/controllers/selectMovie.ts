import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { format } from "date-fns";
interface ITime{
  hour: number;
  min: number;
}
interface IDate{
  date:string;
  selectedTimes: ITime[];
}

export const selectMoviesController = (dependencies: IDependencies) => {
  const {useCases: { selectMoviesUseCase }} = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { selectedDates,selectedScreens, selectedTimes, selectedLanguages, selectedFormats, movieId, theatreId } = req.body
    const startDate = new Date(selectedDates[0].year, selectedDates[0].month , selectedDates[0].day);
    const endDate = new Date(selectedDates[1].year, selectedDates[1].month , selectedDates[1].day );
    const selectedDateTimes: IDate[] = [];
    let currentDate = startDate;
    while(currentDate <= endDate){
      const dateObj: IDate = {
        date: format(currentDate, 'yyyy-MM-dd'),
        selectedTimes: []
      };
      selectedTimes.forEach((time: { hour: any; min: any; }) => {
        // Push the selected time to the selectedTimes array
        dateObj.selectedTimes.push({
          hour: time.hour,
          min: time.min
        });
      });
      // selectedDateTimes -- array that contains date and then time as an array
      selectedDateTimes.push(dateObj);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    console.log('here')
    const response = await selectMoviesUseCase(dependencies).execute({selectedDateTimes, selectedLanguages, selectedFormats, movieId, theatreId},selectedScreens);
    res.status(200).json({
      success: true,
      data: response,
      messages: "Movie fetched!",
    })
    } catch (error) {
      next(error)
    }
  }
}