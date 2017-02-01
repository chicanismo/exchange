// this will be used later to handle multple reducing functions
// import { handleActions } from "redux-actions"

export const basicReducer = (state, {payload}) => {
  return {
    ...state,
    word: payload
  }
}
