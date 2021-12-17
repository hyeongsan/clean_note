import React, { useEffect, useState } from "react";

const Join = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {

  //     axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //       setUsers(response.data);
  //     });
  //   }, []);

  return (
    <>
      <div className="loginForm">
        <form action="onSubmit">
          <div className="loginInput">
            <span>아이디</span>
            <input className="id" type="text" name="id" />
            <span>비밀번호</span>
            <input className="pw" type="text" name="pw" />
          </div>
          <button className="loginBtn" type="submit">
            가입하기
          </button>
        </form>
      </div>
    </>
  );
};

export default Join;
