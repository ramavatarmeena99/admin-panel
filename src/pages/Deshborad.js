import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/userAction";

export default function Deshboard() {
  let dispatch = useDispatch();
  let logoutHandler = () => {
    dispatch(logoutAction({}));
  };

  return (
    <div style={styles}>
      <h1>WELCOME TO THE DASHBORD</h1>
      <button style={btnStyle} onClick={logoutHandler}>
        LOGOUT
      </button>
    </div>
  );
}

let styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
};

let btnStyle = {
  padding: "10px 20px",
};
