import React, { useContext, useState, CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import authContext from "../../context/authContext";
import Button from "../UI/Button";
import userIcon from "../../assets/img/user.png";

import "./Header.scss";

const Header = () => {
  let navigate = useNavigate();

  const { user } = useContext(authContext);

  const [userMenu, setUserMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="header__menu">
            <li>
              <Link to="/228">варианты</Link>
            </li>
            <li>
              <Link to="/1337">исключительно</Link>
            </li>
            <li>
              <Link to="/420">отсутствуют</Link>
            </li>
          </ul>
          {user?.name ? (
            <div className="header__user">
              <Button text={user?.name} type="dark-secondary">
                <img src={userIcon} alt="user" />
              </Button>
            </div>
          ) : (
            <div className="header__buttons">
              <Button
                text="Войти"
                type="dark"
                onClick={() => navigate("/auth")}
              />
              <Button
                text="Зарегистрироватся"
                type="dark-secondary"
                onClick={() => navigate("/reg")}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
