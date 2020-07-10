import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get("http://localhost:4000/users");
  return res.data;
};

export const getUserDetail = async (id) => {
  if (id === "create") {
    return;
  }
  const res = await axios.get(`http://localhost:4000/users/${id}`);
  return res.data;
};

export const newUser = async (name, eng_name, desc) => {
  await axios.post(`http://localhost:4000/users`, {
    name: name,
    eng_name: eng_name,
    desc: desc,
  });
};

export const delUser = async (id) => {
  await axios.delete(`http://localhost:4000/users/${id}`);
};

export const upUser = async (id, name, eng_name, desc) => {
  await axios.patch(`http://localhost:4000/users/${id}`, {
    name: name,
    eng_name: eng_name,
    desc: desc,
  });
};
