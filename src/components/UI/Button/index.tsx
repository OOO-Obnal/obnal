import React, { FC, MouseEventHandler } from "react";

import "./Button.scss";

interface ButtonPropsType {
  text: string | React.ReactNode;
  type: string;
  onClick?: MouseEventHandler;
}

const Button: FC<ButtonPropsType> = ({ type, onClick, text }) => {
  return (
    <button className={`button button--${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
