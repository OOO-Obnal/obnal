import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Order from "../components/Order";
import Services from "../components/Services";
import Why from "../components/Why";
import img from "../assets/img/main.png";

const Main = () => {
  const location = useLocation();

  return (
    <div>
      <div className="main">
        <div className="main__wrapper">
          <aside className="main__sidebar">
            <ul className="main__sidebar-list">
              <li>
                <Link to="/why">Почему мы?</Link>
              </li>
              <li>
                <Link to="/services">Наши услуги</Link>
              </li>
              <li>
                <Link to="/order">Оформить заказ</Link>
              </li>
            </ul>
          </aside>
          <div className="main__content">
            {location.pathname === "/" && (
              <div className="">
                <img
                  src={img}
                  alt="img"
                  style={{ width: "500px", height: "500px", margin: "20px" }}
                />
                <img
                  src={img}
                  alt="img"
                  style={{ width: "500px", height: "500px", margin: "20px" }}
                />
                <img
                  src={img}
                  alt="img"
                  style={{ width: "500px", height: "500px", margin: "20px" }}
                />
              </div>
            )}
            <Routes>
              <Route path="/why" element={<Why />} />
              <Route path="/services" element={<Services />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
