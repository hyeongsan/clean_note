import React, { useEffect, useState } from "react";
import axios from "axios"; //이렇게 import해오고
import Spinner from "../components/spinner";
import { useParams } from "react-router";

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(user);
  // useEffect(() => {

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users/" + id)
  //     .then((response) => {
  //       setUser(response.data);
  //       setLoading(false);
  //     });
  // }, []);

  const userDetail = loading ? (
    <Spinner />
  ) : (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  );

  return (
    <>
      <div className="loginForm">
        <form action="onSubmit">
          <div className="loginInput">
            <span>아이디</span>
            <input className="id" type="text" />
            <span>비밀번호</span>
            <input className="pw" type="text" />
          </div>
          <button className="loginBtn" type="submit">
            login
          </button>
        </form>
      </div>
      {/* {userDetail} */}
    </>
  );
};

export default Login;
