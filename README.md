# React

- ReactSaga 연습
- react-redux 활용
- REST API 이해 후, CRUD 해보기

# Reducer

```javascript
// ReactSaga 처리
// 유저 생성 , newUser 함수에 이름 , 영어이름 , 설명을 인자로 줌 axios.post 사용
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
// 유저 삭제 , delUser 에 아이디값을 주어 해당 아이디 axios.delete 로 삭제
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
// 유저 수정 , upUser 에 아이디~설명 을 인자로 주고 axios.patch 사용으로 수정
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
```

# src / api / user.js ( REST API )

```javascript
// axios.post 새 유저 등록
export const newUser = async (name, eng_name, desc) => {
  await axios.post(`http://localhost:4000/users`, {
    name: name,
    eng_name: eng_name,
    desc: desc,
  });
};
// axios.delete 해당유저 삭제
export const delUser = async (id) => {
  await axios.delete(`http://localhost:4000/users/${id}`);
};
// axios.patch 해당유저 내용 변경
export const upUser = async (id, name, eng_name, desc) => {
  await axios.patch(`http://localhost:4000/users/${id}`, {
    name: name,
    eng_name: eng_name,
    desc: desc,
  });
};
```

# src / modules / user.js ( Redux Saga )

```javascript
// CREATE DELETE UPDATE 모두 같은 createSaga 를 사용하는중
// 문제는 없으나 모두 'CREATE_USER_SUCCESS' 를 반환하기 때문에 수정할 예정
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
```
