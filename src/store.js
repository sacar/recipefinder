import { createStore, combineReducers, applyMiddleware } from "redux";
import { recipes } from "./recipe/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = { recipes };

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
