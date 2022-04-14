import { Workout } from '../src/db/workout.entity';
import { OutputWorkOutListDto } from 'src/dto/OutputWorkOutListDto';

export function returnMapping(data: Workout[]): OutputWorkOutListDto {
  const Mapping = new OutputWorkOutListDto();
  data.forEach((element) => {
    Mapping.items.push({
      id: Number(element.id),
      categoryWorkOut: element.categoryWorkOut,
      difficulty: element.difficulty,
      time: element.time,
      score: element.score,
      date: element.date,
    });
  });
  return Mapping;
}
