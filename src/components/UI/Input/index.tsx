import React, { FC } from "react";

import "./Input.scss";

// Не стал выносить варианты input'a в enum (при желании можно)

interface InputPropsType {
  type: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler;
  variant: string;
  value?: string;
}

const Input: FC<InputPropsType> = ({
  type,
  placeholder,
  onChange,
  variant,
  value,
}) => {
  return (
    <input
      className={`input input--${variant}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
