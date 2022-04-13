import { List, ListItem } from "@mui/material";

import { OutputWorkOutListDto } from "../dto/OutputWorkOutListDto";
import { WorkoutListElement } from "./WorkoutListElement";

type WorkoutListProps = {
  workoutList: OutputWorkOutListDto;
}

export const WorkoutList = ({workoutList}: WorkoutListProps) => {
  const workouts = workoutList.items;
  return (
    <List
      dense={false}
      sx={{ '& > :nth-of-type(odd)': {
          bgcolor: (theme) => theme.palette.list.lightbg,
        } }}
    >
      {workouts.map((workout) => (
        <ListItem key={`${workout.id}`}>
          <WorkoutListElement workout={workout} />
        </ListItem>
      ))}
    </List>
  );
}