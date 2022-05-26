import React, { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../context/authContext";
import { ordersAPI } from "../../services/OrdersServices";
import Button from "../UI/Button";
import Input from "../UI/Input";

import "./Order.scss";

const Order = () => {
  const [postOrder] = ordersAPI.usePostOrderMutation();
  const { user } = useContext(authContext);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  let navigation = useNavigate();

  const onOrderPost = () => {
    if (title !== "" && text !== "") {
      const newOrder = {
        title,
        text,
        userId: user?.id,
      };

      postOrder(newOrder);
      setText("");
      setTitle("");
      navigation("/user/orders");
    }
  };

  return (
    <div className="order">
      <div className="order__form">
        <Input
          placeholder="Введите название заказа"
          type="text"
          variant="dark-outlined"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <Input
          placeholder="Введите текст заказа"
          type="text"
          variant="dark-outlined"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button text="Оформить заказ" type="light" onClick={onOrderPost} />
      </div>
    </div>
  );
};

export default Order;
