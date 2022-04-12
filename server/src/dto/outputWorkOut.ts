import { workOutDifficulties } from 'src/constant/workOutDifficulties';
import { workOutTypes } from 'src/constant/workOutCategory';

export class OutputWorkOutDto {
  id: number;
  categoryWorkOut: string;
  difficulty: string;
  time: number;
  score: number;
  data: string;
}
