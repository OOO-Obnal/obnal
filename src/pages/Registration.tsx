import React, { ChangeEvent, useState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { userAPI } from "../services/UserService";

const Registration = () => {
  const [postUser, { isError, isLoading, isSuccess }] =
    userAPI.usePostUserMutation();

  const [regError, setRegError] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const onUserAdd = () => {
    if (password === secondPassword) {
      const newUser = { name, password, email, userTheme: "dark" };
      postUser(newUser);
      setRegError(false);
    } else {
      setRegError(true);
    }
  };

  return (
    <div className="registration">
      <div className="container">
        <div className="registration__wrapper">
          <div className="registration__form">
            {regError && (
              <div className="registration__form-error">
                Ошибка: пароли не совпадают
              </div>
            )}
            {isError && (
              <div className="registration__form-error">
                Ошибка: ошибка при отправке данных
              </div>
            )}
            <Input
              type="text"
              placeholder="Введите имя"
              variant="dark-outlined"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
            />
            <Input
              type="text"
              placeholder="Введите email"
              variant="dark-outlined"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
            />
            <Input
              type="text"
              placeholder="Введите пароль"
              variant="dark-outlined"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              value={password}
            />
            <Input
              type="text"
              placeholder="Введите пароль повторно"
              variant="dark-outlined"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSecondPassword(e.target.value)
              }
              value={secondPassword}
            />
            <Button
              text={isLoading ? "Отправка..." : "Зарегистрироваться"}
              type="light"
              onClick={onUserAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
