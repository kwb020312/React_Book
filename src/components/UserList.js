import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserList({ users }) {
  const dispatch = useDispatch();

  return (
    <>
      <h1>플레이오토 ... !</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/${user.id}`}>{user.name}</Link>
            <button
              onClick={() => dispatch({ type: "DELETE_USER", id: user.id })}
              style={{ marginLeft: "50px" }}
            >
              삭제하기
            </button>
          </li>
        ))}
      </ul>
      <Link to="/create">
        <button>추가하기</button>
      </Link>
    </>
  );
}

export default UserList;
