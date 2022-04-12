import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Workout } from 'src/workout/schema/workout.schema';
export type UserDocument = Document & User;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' })
  workouts: Workout;
}

export const UserSchema = SchemaFactory.createForClass(User);
