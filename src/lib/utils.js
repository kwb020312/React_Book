import { call, put } from "redux-saga/effects";

// 재사용할 사가함수
export const actionSaga = (api, success, error) => {
  return function* saga() {
    try {
      const data = yield call(api);

      yield put({
        type: success,
        data,
      });
    } catch (err) {
      yield put({
        type: error,
        error: err,
      });
    }
  };
};

export const handleActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            loading: true,
            data: null,
            error: null,
          },
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            loading: false,
            data: action.data,
            error: null,
          },
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            loading: false,
            data: null,
            error: action.error,
          },
        };
      default:
        return state;
    }
  };
};
