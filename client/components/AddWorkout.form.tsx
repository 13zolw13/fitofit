import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DateTimePicker } from '@mui/x-date-pickers';
import { workOutDifficulties } from 'data/workOutDifficulties';
import { workOutTypes } from 'data/workOutTypes';
import { InputWorkOutDto } from 'dto';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { WorkoutApi } from 'service/WorkoutApi';
import { formatStringToIso } from 'utils';

const FormElementWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
}));

type AddWorkoutFormProps = {
  defaultValues: InputWorkOutDto;
};

export const AddWorkoutForm = ({ defaultValues }: AddWorkoutFormProps) => {
  const [backendError, setBackendError] = React.useState("");
  const [didCorrectlySent, setDidCorrectlySent] = React.useState(false);

  const { handleSubmit, control, reset, formState, getValues } =
    useForm<InputWorkOutDto>({
      resolver: classValidatorResolver(InputWorkOutDto),
      defaultValues: defaultValues,
      mode: 'onChange',
    });
  console.log(formState.errors);

  const onSubmit = async (data: InputWorkOutDto) => {
    console.log(getValues());
    console.log(data);
    reset();
    const result = await WorkoutApi.sendWorkout(data);
    console.log(result);
    if (WorkoutApi.isResponseError(result)) {
      setBackendError(result.errorMessage);
    } else {
      setBackendError('');
      setDidCorrectlySent(true);
    }
  };

  return (
    <>
      <FormControl
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ margin: '2rem auto' }}
        fullWidth
        onFocus={() => setBackendError('')}
      >
        <FormElementWrapper>
          <Controller
            name="categoryWorkOut"
            control={control}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error} fullWidth>
                <InputLabel id="categoryWorkOut">Workout category</InputLabel>
                <Select
                  {...field}
                  labelId="categoryWorkOut"
                  label="categoryWorkOut"
                >
                  {workOutTypes.map((workout) => (
                    <MenuItem key={workout.id} value={workout.categoryName}>
                      {workout.categoryName}
                    </MenuItem>
                  ))}
                </Select>
                {!!formState.errors.categoryWorkOut && (
                  <FormHelperText>
                    {formState.errors.categoryWorkOut.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </FormElementWrapper>
        <FormElementWrapper>
          <Controller
            name="difficulty"
            control={control}
            defaultValue="easy"
            render={() => (
              <FormControl
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FormLabel id="difficulty" sx={{ marginRight: '1rem' }}>
                  Difficulty
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="difficulty"
                  name="difficulty"
                  defaultValue="easy"
                >
                  {workOutDifficulties.map((difficulty) => {
                    return (
                      <FormControlLabel
                        label={difficulty.difficultyName}
                        value={difficulty.difficultyName}
                        id={difficulty.id}
                        control={<Radio />}
                        key={difficulty.id}
                      />
                    );
                  })}
                </RadioGroup>
                {!!formState.errors.difficulty && (
                  <FormHelperText>
                    {formState.errors.difficulty.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </FormElementWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormElementWrapper>
              <Controller
                name="time"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    type="number"
                    label="Time"
                    value={value}
                    onChange={(e) => onChange(+e.target.value)}
                    error={!!formState.errors.time}
                    helperText={
                      formState.errors.time
                        ? formState.errors.time.message
                        : null
                    }
                  />
                )}
              />
            </FormElementWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormElementWrapper>
              <Controller
                name="date"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <DateTimePicker
                      label="Workout date"
                      value={value}
                      onChange={(e) => {
                        if (e) {
                          return onChange(formatStringToIso(e));
                        }
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  );
                }}
              />
              {!!formState.errors.date && (
                <FormHelperText>{formState.errors.date.message}</FormHelperText>
              )}
            </FormElementWrapper>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </FormControl>
      {backendError && <Alert severity="error">{backendError}</Alert>}
      {didCorrectlySent && <Alert severity="success">Great! We have your workout in our database</Alert>}
    </>
  );
};
