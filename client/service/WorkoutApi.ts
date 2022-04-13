import axios from "axios";
import { endpoints } from "data/endpoints";
import { createErrorMessage } from "utils";
import { OutputWorkOutListDto, InputWorkOutDto } from "../dto";
import { ServiceErrorMessage } from "../types/workout.api";



export class WorkoutApi {
  static async sendWorkout(
    request: InputWorkOutDto,
  ): Promise<OutputWorkOutListDto | ServiceErrorMessage> {
    try {
      const resp = await axios.post(endpoints.WORKOUTAPI_SEND_WORKOUT, request);
      return resp.data as OutputWorkOutListDto;
    } catch (err) {
      return this.createErrorMessage(
        'Sth wrong during adding new workout, We dont really know but keep calm.',
      );
    }
  }
  static isResponseError(
    response: OutputWorkOutListDto | ServiceErrorMessage,
  ): response is ServiceErrorMessage {
    return (response as ServiceErrorMessage).errorMessage !== undefined;
  }

  private static createErrorMessage (
    text: string,
    status?: number,
  ): ServiceErrorMessage { return ({
    errorMessage: text,
    ...(status && { status: status }),
  })};
}