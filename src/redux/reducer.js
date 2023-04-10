//import all constants
import * as constants from "./constants";

const initialState = {
  biology: [],
  math: [],
  chemistry: [],
  english: [],
  physics: [],
  result: 0,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_QUIZ:
      return {
        ...state,
        ...action.payload,
      };
    case constants.SET_RESULT:
      return {
        ...state,
        result: state.result + 1,
      };
    default:
      return state;
  }
}
