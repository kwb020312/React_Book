import React from "react";
import UserDetailContainer from "../containers/UserDetailContainer";

function UserDetailPage({ match, history }) {
  const { id } = match.params;

  const onClick = () => {
    history.push("/");
  };

  return (
    // 넘어오는 값이 문자열로 넘어오기 때문에 숫자로 변환해주어야 함.
    // <UserDetailContainer userID={parseInt(id, 10)} onClick={onClick} />
    <UserDetailContainer userID={id} onClick={onClick} />
  );
}

export default UserDetailPage;
