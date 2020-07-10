import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 필요모듈 호출
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules";
import { BrowserRouter } from "react-router-dom";

// sagaMiddleware 생성
const sagaMiddleware = createSagaMiddleware();

// store 생성
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// rootSaga 실행
sagaMiddleware.run(rootSaga);

// App 을 Provider 로 감싸준 후 store 적용
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
