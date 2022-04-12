import { workOutTypes } from 'src/constant/workOutCategory';
import { workOutDifficulties } from 'src/constant/workOutDifficulties';
import {
  IsEnum,
  IsNumber,
  Min,
  Max,
  IsDateString,
  IsString,
} from 'class-validator';

export class InputWorkOutDto {
  @IsString()
  categoryWorkOut: string;
  @IsString()
  difficulty: string;
  @Min(5)
  @Max(300)
  @IsNumber()
  time: number;
  @IsDateString()
  date: string;
}
