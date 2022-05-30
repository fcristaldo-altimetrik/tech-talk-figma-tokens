/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import ButtonComponent from "../../components/button/Button";

import welcome_icon from "../../assets/icon/welcome_boy.svg";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import "./logIn.scss";

export const arrow_right = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 12H20.33"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const eyes_icon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.47 14.53L2 22"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L14.53 9.47"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const userIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogIn = () => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-white">
        <div className="log-in grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <h1 className="title">Welcome back</h1>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-basic">
                Mobile number or email
              </InputLabel>
              <Input
                id="standard-basic"
                type={"text"}
                endAdornment={
                  <InputAdornment position="end">{userIcon}</InputAdornment>
                }
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? eyes_icon : eyes_icon}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>
            <ButtonComponent
              text="Log in"
              btnStyle="btn-primary"
              icon={arrow_right}
            />
            <p className="paragraph">
              If you don't have an account,
              <a href="#"> Sign up</a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-image bg-hidden">
        <img src={welcome_icon} alt="welcome_icon" title="welcome icon" />
      </div>
    </div>
  );
};

export default LogIn;
