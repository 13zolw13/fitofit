import { ServiceErrorMessage } from '../types/workout.api';

export const createErrorMessage = (
  text: string,
  status?: number,
): ServiceErrorMessage => ({
  errorMessage: text,
  ...(status && { status: status }),
});
