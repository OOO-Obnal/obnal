import React from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const Registration = () => {
  return (
    <div className="registration">
      <div className="container">
        <div className="registration__wrapper">
          <div className="registration__form">
            <Input
              type="text"
              placeholder="Введите имя"
              variant="dark-outlined"
            />
            <Input
              type="text"
              placeholder="Введите email"
              variant="dark-outlined"
            />
            <Input
              type="text"
              placeholder="Введите пароль"
              variant="dark-outlined"
            />
            <Input
              type="text"
              placeholder="Введите пароль повторно"
              variant="dark-outlined"
            />
            <Button text="Зарегистрироваться" type="light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
