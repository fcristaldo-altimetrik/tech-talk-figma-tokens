import React from "react";
import { useNavigate } from "react-router-dom";

import "./button.scss";

const ButtonComponent = ({ btnStyle, text, icon, onClick }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`btn ${btnStyle}`}
      onClick={onClick ? onClick : () => navigate("/product")}
    >
      {text} {icon ? <i className="arrow_right">{icon} </i> : ""}
    </button>
  );
};

export default ButtonComponent;
