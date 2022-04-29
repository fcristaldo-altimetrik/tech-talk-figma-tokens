import React from "react";
import { useNavigate } from "react-router-dom";

import "./button.css";

const ButtonComponent = () => {
  const navigate = useNavigate();
  return (
    <button className="btn-custom" onClick={() => navigate("/")}>
      Log in
    </button>
  );
};

export default ButtonComponent;
