import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type WorkoutDocument = Document & Workout;

@Schema()
export class Workout {
  @Prop({ required: true })
  categoryWorkOut: string;

  @Prop({ required: true })
  difficulty: string;

  @Prop({ required: true })
  time: number;

  @Prop({ required: true })
  date: string;

  @Prop({ required: false })
  userId?: string;

  @Prop()
  score?: number;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
