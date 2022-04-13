import { format } from 'date-fns';

export const getFormattedDateComponents = (dateString: string) => {
  const dateObject = new Date(Date.parse(dateString));
  const formattedDateString = format(dateObject, 'u/M/dd');
  const formattedWeekDayString = format(dateObject, 'E');
  const formattedTimeString = format(dateObject, 'HH:mm');
  return {
    workoutDate: formattedDateString,
    workoutWeekDay: formattedWeekDayString,
    workoutTime: formattedTimeString,
  };
};
