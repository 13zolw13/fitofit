import { OutputWorkOutListDto } from '../../server/src/dto/OutputWorkOutListDto'
import { InputWorkOutDto } from "../../server/src/dto/inputWorkOutDto"
export interface IWorkoutApi {
  sendWorkout(request: InputWorkOutDto) : Promise<OutputWorkOutListDto | null>;
}