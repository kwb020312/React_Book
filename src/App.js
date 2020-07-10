import React from "react";
import { Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import UserCreate from "./components/UserCreate";

function App() {
  return (
    <>
      <Route path="/create" component={UserCreate} exact />
      <Route path="/" component={UserListPage} exact />
      <Route path="/:id" component={UserDetailPage} exact />
    </>
  );
}

export default App;
