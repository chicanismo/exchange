import { TEST_ACTION } from './types';

export const callAction = str => dispatch => dispatch({
  type: TEST_ACTION,
  payload: str,
});
