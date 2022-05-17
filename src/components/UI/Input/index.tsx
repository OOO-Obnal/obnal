import React, { FC } from "react";

import "./Input.scss";

// Не стал выносить варианты input'a в enum (при желании можно)

interface InputPropsType {
  type: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler;
  variant: string;
}

const Input: FC<InputPropsType> = ({
  type,
  placeholder,
  onChange,
  variant,
}) => {
  return (
    <input
      className={`input input--${variant}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
