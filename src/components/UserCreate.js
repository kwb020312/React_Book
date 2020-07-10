import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function UserCreate() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [engName, setEngName] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <p>
        Name :{" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        ></input>
      </p>
      <p>
        EngName :{" "}
        <input
          value={engName}
          onChange={(e) => setEngName(e.target.value)}
          placeholder=""
        ></input>
      </p>
      <p>
        Desc :{" "}
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </p>
      <Link to="/">
        <button
          onClick={() => {
            dispatch({
              type: "CREATE_USER",
              name: name,
              eng_name: engName,
              desc: desc,
            });
          }}
        >
          등록하기
        </button>
      </Link>
    </>
  );
}
