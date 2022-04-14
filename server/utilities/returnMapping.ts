import { Workout } from '../src/db/workout.entity';
import { OutputWorkOutListDto } from 'src/dto/OutputWorkOutListDto';

export function returnMapping(data: Workout[]): OutputWorkOutListDto {
  const MappingOutput = new OutputWorkOutListDto();
  MappingOutput.items = data;
  return MappingOutput;
}
