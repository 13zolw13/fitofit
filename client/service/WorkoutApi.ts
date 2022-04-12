import axios from "axios";
import { endpoints } from "data/endpoints";
import { OutputWorkOutListDto, InputWorkOutDto } from "../dto";

export class WorkoutApi {
  static async sendWorkout(request: InputWorkOutDto): Promise<OutputWorkOutListDto | null> {
    try {
      const resp = await axios.post(endpoints.WORKOUTAPI_SEND_WORKOUT, request)
      return resp.data as OutputWorkOutListDto;
    } catch (err) {
      return null;
    }
  }

}