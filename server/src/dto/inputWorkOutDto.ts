import { workOutTypes } from 'src/constant/workOutTypes';
import { workOutDifficulties } from 'src/constant/workOutDifficulties';
import { IsEnum, IsNumber, Min, Max } from 'class-validator';

export class InputWorkOutDto {
  @IsEnum(workOutTypes)
  categoryWorkOut: workOutTypes;
  @IsEnum(workOutDifficulties)
  difficulty: workOutDifficulties;
  @Min(5)
  @Max(300)
  @IsNumber()
  time: number;
}
