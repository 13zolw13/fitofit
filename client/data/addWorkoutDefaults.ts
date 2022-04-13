import { formatStringToIso } from "utils/formatStringToIso";


export const addWorkoutDefaults = {
  categoryWorkOut: 'yoga',
  difficulty: 'easy',
  time: 5,
  date: formatStringToIso(new Date().toString()),
};
