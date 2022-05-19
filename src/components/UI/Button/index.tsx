import React, { FC, MouseEventHandler } from "react";

import "./Button.scss";

interface ButtonPropsType {
  text: string | React.ReactNode;
  type: string;
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
}

const Button: FC<ButtonPropsType> = ({ type, onClick, text, children }) => {
  return (
    <button className={`button button--${type}`} onClick={onClick}>
      {children}
      {text}
    </button>
  );
};

export default Button;
