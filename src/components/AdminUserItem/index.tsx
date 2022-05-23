import React, { FC } from "react";
import { User } from "../../types/User";
import Button from "../UI/Button";

import "./AdminUserItem.scss";

interface AdminUserItemPropsType {
  user: User;
  onDelete: React.MouseEventHandler;
}

const AdminUserItem: FC<AdminUserItemPropsType> = ({ user, onDelete }) => {
  return (
    <div className="admin__users-item">
      <div className="admin__users-item-name">
        {user.id}. {user.name}
      </div>
      <div className="admin__users-item-email">
        <span>Email:</span> {user.email}
      </div>
      <div className="admin__users-item-password">
        <span>Пароль:</span> {user.password}
      </div>
      <div className="admin__users-item-role">
        <span>Стастус:</span> {user.role}
      </div>
      <div className="admin__users-item-buttons">
        <Button text="Редактировать роль" type="light" />
        <Button text="Удалить" type="light" onClick={onDelete} />
      </div>
    </div>
  );
};

export default AdminUserItem;
