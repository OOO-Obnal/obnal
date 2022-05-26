import React, { useContext, useId } from "react";
import authContext from "../../context/authContext";
import { ordersAPI } from "../../services/OrdersServices";

import "./UserOrder.scss";

const UserOrders = () => {
  const { user } = useContext(authContext);
  const { data: orders } = ordersAPI.useGetOrdersQuery();

  return (
    <div className="user__orders">
      <div className="user__orders-title">Ваши заказы</div>
      <div className="user__orders-wrapper">
        {orders?.map((order) => {
          if (order.userId === user?.id) {
            return (
              <div className="user__orders-item">
                <div>
                  {order.id}. {order.title} -- {order.text}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default UserOrders;
