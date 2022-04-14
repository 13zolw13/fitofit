import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, Max, IsDateString, IsString } from 'class-validator';

export class InputWorkOutDto {
  @ApiProperty()
  @IsString()
  categoryWorkOut: string;
  @ApiProperty()
  @IsString()
  difficulty: string;
  @ApiProperty()
  @Min(5)
  @Max(300)
  @IsNumber()
  time: number;
  @ApiProperty()
  @IsDateString()
  date: string;
}
