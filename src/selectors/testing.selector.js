import get from "lodash/get";

export const pullString = (state) => get(state, "basicReducer.word");
