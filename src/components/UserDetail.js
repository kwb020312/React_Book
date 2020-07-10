import React, { useState } from "react";
import { useDispatch } from "react-redux";

function UserDetail({ user, onClick }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [eng_name, setEng_name] = useState(user.eng_name);
  const [desc, setDesc] = useState(user.desc);
  const [onUpdate, setOnUpdate] = useState(false);

  const onComplete = () => {
    dispatch({
      type: "UPDATE_USER",
      id: user.id,
      name: name,
      eng_name: eng_name,
      desc: desc,
    });
    setOnUpdate(false);
  };

  return (
    <>
      {onUpdate === false ? (
        <>
          <h1>{name} 님</h1>
          <div>영어이름 : {eng_name}</div>
          <div>소개 : {desc}</div>
          <button onClick={onClick}>리스트로 돌아가기</button>
          <button
            onClick={() => setOnUpdate(true)}
            style={{ marginLeft: "50px" }}
          >
            수정하기
          </button>
        </>
      ) : (
        <>
          <p>
            이름 :{" "}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </p>
          <p>
            영어이름 :{" "}
            <input
              value={eng_name}
              onChange={(e) => setEng_name(e.target.value)}
            />
          </p>
          <p>
            소개 :{" "}
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </p>
          <button onClick={() => onComplete()}>수정완료</button>
        </>
      )}
    </>
  );
}

export default UserDetail;
