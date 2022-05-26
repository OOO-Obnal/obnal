import { info } from "console";
import React, { useContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Settings from "../../components/Settings";
import UserOrders from "../../components/UserOrders";
import authContext from "../../context/authContext";
import Admin from "../Admin";

import "./UserPage.scss";

const UserPage = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const { user, setAuth, setUser } = useContext(authContext);

  const onLogOut = () => {
    if (setAuth && setUser) {
      setAuth(false);
      setUser({});
      navigate("/");
    }
  };

  return (
    <div className="user">
      <div className="container">
        <h1 className="user__title">Личный кабинет: {user?.name}</h1>
        <div className="user__wrapper">
          <aside className="user__sidebar">
            <ul className="user__sidebar-list">
              <li onClick={() => navigate("/user/settings")}>Настройки</li>
              <li onClick={() => navigate("/user/orders")}>Мои заказы</li>
              <li>Тех. поддержка</li>
              <li>Мои комментарии</li>
              <li onClick={onLogOut}>Выйти</li>
              {user?.role === "admin" && (
                <li onClick={() => navigate("/user/admin")}>Админ-панель</li>
              )}
            </ul>
          </aside>
          <div className="user__content">
            {location.pathname === "/user" && (
              <div className="user__content-info">
                Это ваш личный кабинет, здесь вы можете настраивоть свой профиль
                и отслеживать свою активночть
              </div>
            )}
            <Routes>
              <Route path="/settings" element={<Settings />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/orders" element={<UserOrders />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
