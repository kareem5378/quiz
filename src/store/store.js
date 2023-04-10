//store setup
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import quizReducer from "../redux/reducer";

const allreducers = combineReducers({ quizReducer });

const store = createStore(allreducers, applyMiddleware(thunk));

export default store;
