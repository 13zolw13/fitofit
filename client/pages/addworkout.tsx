import { Typography } from "@mui/material";
import { AddWorkoutForm } from "components";
import { addWorkoutDefaults } from "data/addWorkoutDefaults";

const AddWorkoutPage = () => {
  return (
    <>
      <Typography variant="h2">Add new workout</Typography>
      <AddWorkoutForm defaultValues={addWorkoutDefaults}/>
    </>
  );
};

export default AddWorkoutPage;
