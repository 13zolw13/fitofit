import { workOutDifficulties } from 'src/constant/workOutDifficulties';
import { workOutTypes } from 'src/constant/workOutTypes';

export class OutputWorkOutDto {
  id: number;
  name: string;
  difficulty: workOutDifficulties;
  time: number;
  type: workOutTypes;
  score: number;
}
