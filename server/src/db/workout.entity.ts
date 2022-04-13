import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  categoryWorkOut: string;
  @Column()
  difficulty: string;
  @Column()
  time: number;
  @Column()
  score: number;
  @Column()
  date: string;
}
