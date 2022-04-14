import { ApiProperty } from '@nestjs/swagger';
import { OutputWorkOutDto } from './outputWorkOut';

export class OutputWorkOutListDto {
  @ApiProperty()
  items: OutputWorkOutDto[];
}
