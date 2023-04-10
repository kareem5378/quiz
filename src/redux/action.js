//import all constants
import * as constants from "./constants";

export const getQuiz = () => (dispatch) => {
  try {
    fetch("questions.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: constants.GET_QUIZ,
          payload: data,
        });
      });
  } catch (error) {
    alert("Error generating quiz");
  }
};

export const setResult = () => (dispatch) => {
  dispatch({ type: constants.SET_RESULT });
};
