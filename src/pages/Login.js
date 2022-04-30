import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../redux/actions/userAction";
import Style from "./index.module.css";
export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [pressOtp, setPressOtp] = useState("");
  const [isChange, setIsChange] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const enterMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };
  const enterOtp = (e) => {
    setPressOtp(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      if (isChange) {
        loginHandler();
      } else {
        otpHandler();
      }
    }
  };
  const loginHandler = async () => {
    setIsLoading(true);
    await axios
      .post("https://kgdevnode.khelgully.com/noauth-api/v1/login/user", {
        devicetoken: "rflhbjn57t",
        devicetype: "desktop_web",
        username: mobileNumber,
      })
      .then(function (response) {
        setIsChange(false);
        setIsLoading(false);
      })
      .catch(function (error) {
        alert(error.response.data.error.message);
        setIsLoading(false);
      });
  };
  const otpHandler = async () => {
    setIsLoading(true);

    await axios
      .post("https://kgdevnode.khelgully.com/noauth-api/v1/login/user", {
        devicetoken: "rflhbjn57t",
        devicetype: "desktop_web",
        otp: pressOtp,
        username: mobileNumber,
      })
      .then(function (response) {
        dispatch(userAction({ data: response.data.results }));

        setIsLoading(false);
        navigate("/dashboard/");
      })
      .catch(function (error) {
        alert(error.response.data.error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className={Style.login}>
      {isChange ? (
        <div className={Style.mobileNumberForm}>
          <input
            className={Style.inputFiled}
            onChange={enterMobileNumber}
            value={mobileNumber}
            onKeyDown={onKeyPress}
            placeholder="Mobile Number"
            type="number"
          ></input>
          <button className={Style.submitBtn} onClick={loginHandler}>
            {isLoading ? "Loading" : "LOGIN"}
          </button>
        </div>
      ) : (
        <div className={Style.otpForm}>
          <input
            className={Style.inputFiled}
            onChange={enterOtp}
            onKeyDown={onKeyPress}
            value={pressOtp}
            placeholder=" Enter Otp "
            type="number"
          ></input>
          <button className={Style.submitBtn} onClick={otpHandler}>
            {isLoading ? "LOADING" : "OTP"}
          </button>
        </div>
      )}
    </div>
  );
}
