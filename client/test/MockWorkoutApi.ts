import { OutputWorkOutListDto, InputWorkOutDto } from '../dto';
import { ServiceErrorMessage } from '../types/workout.api';

export class MockWorkoutApi {
  static isResponseError(
    response: OutputWorkOutListDto | ServiceErrorMessage,
  ): response is ServiceErrorMessage {
    return (response as ServiceErrorMessage).errorMessage !== undefined;
  }
}
