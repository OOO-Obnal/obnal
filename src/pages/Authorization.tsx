import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { userAPI } from "../services/UserService";

const Authorization = () => {
  const { data: users, isError, isFetching } = userAPI.useGetUsersQuery();

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authError, setAuthError] = useState(false);

  const onUserAuth = () => {
    const user = users?.filter((user) => user.email === email)[0];

    if (user) {
      if (user.password === password) {
        alert("Вы авторизованы");
        navigate("/");
      } else {
        setAuthError(true);
      }
    } else {
      setAuthError(true);
    }
  };

  return (
    <div className="authorization">
      <div className="container">
        <div className="authorization__wrapper">
          <div className="authorization__form">
            {authError && (
              <div className="authorization__form-error">
                Ошибка: неверный email или пароль
              </div>
            )}
            {isError && (
              <div className="authorization__form-error">
                Ошибка: ошибка при отправке данных
              </div>
            )}
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
            <Button
              text={isFetching ? "Авторизация..." : "Авторизоваться"}
              type="light"
              onClick={onUserAuth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
