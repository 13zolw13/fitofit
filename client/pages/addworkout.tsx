import { Typography } from "@mui/material";
import { AddWorkoutForm } from "components";
import { addWorkoutDefaults } from "data/addWorkoutDefaults";

import { PageTitle } from '../components';

const AddWorkoutPage = () => {
  return (
    <>
      <PageTitle text="Add new workout" />
      <AddWorkoutForm defaultValues={addWorkoutDefaults}/>
    </>
  );
};

export default AddWorkoutPage;
