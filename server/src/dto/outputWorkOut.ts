import { workOutDifficulties } from 'src/constant/workOutDifficulties';
import { workOutTypes } from 'src/constant/workOutTypes';

export class OutputWorkOutDto {
  id: number;
  categoryWorkOut: workOutTypes;
  difficulty: workOutDifficulties;
  time: number;
  score: number;
  data: string;
}
