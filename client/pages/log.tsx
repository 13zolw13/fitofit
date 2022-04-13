import { Box } from "@mui/material";
import * as React from "react";
import { MockWorkoutApi } from "../test/MockWorkoutApi";

const LogPage = () => {
  React.useEffect(() => {
    const getDefaultWorkouts = async () => {
      const result = await MockWorkoutApi.getLastWeekWorkouts();
      console.log(result);
    }
    getDefaultWorkouts();
  })

  return <Box>Logs here</Box>;
}

export default LogPage;