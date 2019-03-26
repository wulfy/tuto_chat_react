import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "../reducers/index";
import echoChatMiddleware from "../middlewares/echoChatMiddleware";
import loggerMiddleware from "../middlewares/loggerMiddleware";
import socketIOMiddleware from "../middlewares/socketIOMiddleware";

const middlewares = applyMiddleware(loggerMiddleware,socketIOMiddleware);
const rootReducer  = combineReducers(reducers);

const store = createStore(rootReducer,middlewares);

export default store;