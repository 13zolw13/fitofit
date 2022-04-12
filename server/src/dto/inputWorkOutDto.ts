import { workOutTypes } from 'src/constant/workOutTypes';
import { workOutDifficulties } from 'src/constant/workOutDifficulties';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class InputWorkOutDto {
  @IsString()
  name: string;
  @IsEnum(workOutDifficulties)
  difficulty: workOutDifficulties;
  @IsNumber()
  time: number;
  @IsEnum(workOutTypes)
  type: workOutTypes;
}
