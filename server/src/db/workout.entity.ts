import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'workouts' })
export class Workout {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ApiProperty()
  @Column()
  categoryWorkOut: string;
  @ApiProperty()
  @Column()
  difficulty: string;
  @ApiProperty()
  @Column()
  time: number;
  @ApiProperty()
  @Column()
  score: number;
  @ApiProperty()
  @Column()
  date: string;
}
