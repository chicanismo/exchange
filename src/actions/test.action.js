import { TEST_ACTION } from "./types"

export const callAction = (str) => (dispatch) =>{
  return dispatch({
    type: TEST_ACTION,
    payload: str
  });
};
