import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      <ul className="services__ul">
        <h1 className="services__h">Наши услуги :</h1>
        <li className="services__li">Обнал без мыла</li>
        <li className="services__li">Обнал с мылом</li>
        <li className="services__li">Обнал по-чёрному</li>
        <li className="services__li">Обнал по-белому</li>
        <li className="services__li">Обнал через нал</li>
        <li className="services__li">Обнал по вене</li>
      </ul>
      <ul className="services__ul uo">
        <h1 className="services__h">Цена :</h1>
        <li className="services__li ko">500 ETH</li>
        <li className="services__li ko">600 ETH</li>
        <li className="services__li ko">300 ETH</li>
        <li className="services__li ko">800 ETH</li>
        <li className="services__li ko">1000 ETH</li>
        <li className="services__li ko">9000 ETH</li>
      </ul>
    </div>
  );
};

export default Services;
