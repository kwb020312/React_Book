import { call, put, takeEvery } from "redux-saga/effects";
import { handleActions, actionSaga } from "../lib/utils";

// api 호출
import * as userAPI from "../api/user";

// 액션 타입선언
const GET_USERS = "user/GET_USERS";
const GET_USERS_SUCCESS = "user/GET_USERS_SUCCESS";
const GET_USERS_ERROR = "user/GET_USERS_ERROR";

// 액션생성함수 선언.
// 실제 호출은 getUsers 만 하고 success, error 은 getUsersSaga 함수에서 호출함.
export const getUsers = () => ({ type: GET_USERS });

// 초기상태 선언
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {},
};

// 사용자 상세 액션 타입 선언
const GET_USER_DETAIL = "user/GET_USER_DETAIL";
const GET_USER_DETAIL_SUCCESS = "user/GET_USER_DETAIL_SUCCESS";
const GET_USER_DETAIL_ERROR = "user/GET_USER_DETAIL_ERROR";

// 액션생성함수 선언.
export const getUserDetail = (id) => ({ type: GET_USER_DETAIL, data: id });

// saga 함수 생성
function* getUserDetailSaga(action) {
  const id = action.data;

  try {
    // yield call 로 api 호출시 파라미터는 두번째 인자로 넘겨주면 된다.
    const user = yield call(userAPI.getUserDetail, id);
    yield put({
      type: GET_USER_DETAIL_SUCCESS,
      data: user,
      meta: id,
    });
  } catch (err) {
    yield put({
      type: GET_USER_DETAIL_ERROR,
      error: true,
      data: err,
      meta: id,
    });
  }
}

// 생성된 saga 함수를 하나의 함수로 만들어줌.
export function* usersSaga() {
  yield takeEvery(
    GET_USERS,
    actionSaga(userAPI.getUsers, GET_USERS_SUCCESS, GET_USERS_ERROR)
  );
  yield takeEvery(GET_USER_DETAIL, getUserDetailSaga);
  yield takeEvery("CREATE_USER", createSaga);
  yield takeEvery("DELETE_USER", createSaga);
  yield takeEvery("UPDATE_USER", createSaga);
}

function* createSaga() {
  try {
    const users = yield call(userAPI.getUsers);
    yield put({
      type: "CREATE_USER_SUCCESS",
      data: users,
    });
  } catch (err) {
    yield put({
      type: "ERROR",
    });
  }
}

// 리듀서에 사용자 상세 추가
const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      return handleActions(GET_USERS, "users")(state, action);
    case GET_USER_DETAIL:
      return {
        ...state,
        user: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        user: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_USER_DETAIL_ERROR:
      return {
        ...state,
        user: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    case "CREATE_USER":
      userAPI.newUser(action.name, action.eng_name, action.desc);
      return {
        ...state,
        users: {
          loading: false,
          data: null,
          error: null,
        },
      };
    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        users: {
          loading: false,
          data: action.data,
          error: false,
        },
      };
    case "DELETE_USER":
      userAPI.delUser(action.id);
      return {
        ...state,
        users: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case "UPDATE_USER":
      userAPI.upUser(action.id, action.name, action.eng_name, action.desc);
      return {
        ...state,
        users: {
          loading: true,
          data: null,
          error: null,
        },
      };
    default:
      return state;
  }
};

export default user;
