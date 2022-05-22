import React, { ChangeEvent, useContext, useState } from "react";
import authContext from "../../context/authContext";
import { userAPI } from "../../services/UserService";
import Button from "../UI/Button";
import Input from "../UI/Input";

import "./Settings.scss";

const Settings = () => {
  const { user, setUser } = useContext(authContext);
  const [updateUser, { isSuccess }] = userAPI.useUpdateUserMutation();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);

  const onSaveChanges = () => {
    const updatedUser = { ...user };
    if (name !== updatedUser.name) {
      updatedUser.name = name;
    }

    if (email !== updatedUser.email) {
      updatedUser.email = email;
    }

    if (password !== updatedUser.password) {
      updatedUser.password = password;
    }

    updateUser(updatedUser);

    if (setUser) {
      setUser(updatedUser);
    }
  };

  return (
    <div className="settings">
      <div className="container">
        <div className="settings__form">
          <div className="settings__form-inner">
            {isSuccess && (
              <div className="settings__form-success">
                Данные успешно обновлены
              </div>
            )}
            <div className="settings__form-desc">Введите новое имя</div>
            <Input
              type="text"
              placeholder="Введите новое имя"
              variant="dark-outlined"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <div className="settings__form-desc">Введите новый пароль</div>
            <Input
              type="text"
              placeholder="Введите новый пароль"
              variant="dark-outlined"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <div className="settings__form-desc">Введите новый email</div>
            <Input
              type="text"
              placeholder="Введите новый email"
              variant="dark-outlined"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="settings__form-buttons">
            <Button
              text="Сохранить"
              type="dark-secondary"
              onClick={onSaveChanges}
            />
            <Button text="Удалить аккаунт" type="light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
