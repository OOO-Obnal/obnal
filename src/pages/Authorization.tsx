import React, { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import authContext from "../context/authContext";
import { userAPI } from "../services/UserService";
import { User } from "../types/User";

const Authorization = () => {
  const { data: users, isError, isFetching } = userAPI.useGetUsersQuery();
  const { setAuth, setUser } = useContext(authContext);

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authError, setAuthError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onUserAuth = () => {
    const user = users?.filter((user) => user.email === email)[0];

    if (user) {
      if (user.password === password) {
        if (setAuth) {
          setAuth(true);
        }
        if (setUser) {
          setUser(user);
        }
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
          setSuccess(false);
        }, 1000);
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
            {success && (
              <div className="authorization__form-success">
                Вы успешно авторизовались
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
