import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  Radio,
  TextField,
  Select,
  MenuItem,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { InputWorkOutDto } from '../dto';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { workOutDifficulties } from 'data/workOutDifficulties';
import { workOutTypes } from 'data/workOutTypes';
import { styled } from '@mui/system';
import { format as formatDate, formatISO } from 'date-fns'
import { DateTimePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { ConstructionOutlined } from '@mui/icons-material';

const FormElementWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const AddWorkoutPage = () => {
  const { handleSubmit, control, reset, formState, getValues } =
    useForm<InputWorkOutDto>({
      resolver: classValidatorResolver(InputWorkOutDto),
      defaultValues: {
        categoryWorkOut: 'yoga',
        difficulty: 'easy',
        time: 5,
        date: new Date(),
      },
      mode: 'onChange',
    });

  const onSubmit = (data: InputWorkOutDto) => {
    console.log(getValues());
    console.log(data);
  };

  return (
    <Container maxWidth="md">
      <FormControl
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ margin: '2rem auto' }}
        fullWidth
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
                  <FormControl
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <TextField
                      margin={'normal'}
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
                  </FormControl>
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
                      label="Workout time"
                      value={value}
                      onChange={onChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  );
                }}
              />
            </FormElementWrapper>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddWorkoutPage;
