import React, { useEffect } from "react";
import UserDetail from "../components/UserDetail";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail } from "../modules/user";

// 사용자 아이디를 props 로 받아온다.
function UserDetailContainer({ userID, onClick }) {
  const { loading, data, error } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // dispatch 시에 userID 를 넘겨주어야 하고,
  // 해당 값의 변경이 있는경우 재로딩 하기 위헤 useEffect 의 두번째 인자에 해당 값을 넣어준다.
  useEffect(() => {
    dispatch(getUserDetail(userID));
  }, [userID, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return null;

  return (
    <>
      <UserDetail user={data} onClick={onClick} />
    </>
  );
}

export default UserDetailContainer;
