import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "../reducers/index";
import echoChatMiddleware from "../middlewares/echoChatMiddleware";
import loggerMiddleware from "../middlewares/loggerMiddleware";

const middlewares = applyMiddleware(loggerMiddleware,echoChatMiddleware);
const rootReducer  = combineReducers(reducers);

const store = createStore(rootReducer,middlewares);

export default store;