import { combineReducers } from "redux";
import user, { usersSaga } from "./user";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ user });

export function* rootSaga() {
  yield all([usersSaga()]);
}

export default rootReducer;
