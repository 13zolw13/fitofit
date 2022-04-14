import { ApiProperty } from '@nestjs/swagger';

export class OutputWorkOutDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  categoryWorkOut: string;
  @ApiProperty()
  difficulty: string;
  @ApiProperty()
  time: number;
  @ApiProperty()
  score: number;
  @ApiProperty()
  date: string;
}
