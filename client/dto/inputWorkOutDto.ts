import {IsDateString, IsNumber, IsString,Max, Min } from 'class-validator';

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
