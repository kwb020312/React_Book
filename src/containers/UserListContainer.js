import React, { useEffect } from "react";
import UserList from "../components/UserList";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../modules/user";

function UserListContainer() {
  const { loading, data, error } = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러!</div>;
  if (!data) return <div />;

  return <UserList users={data} />;
}

export default UserListContainer;
