import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import dataReducer from "./reducer/skillReducer";
import hobbiesReducer from "./reducer/hobbiesReducer";
import subjectReducer from "./reducer/subjectReducer";

const store = createStore(
  combineReducers({
    skill: dataReducer,
    hobbies: hobbiesReducer,
    subject: subjectReducer,
  }),
  applyMiddleware(thunkMiddleware)
);

export default store;
