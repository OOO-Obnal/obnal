import React, { useState } from "react";
import AdminUserItem from "../../components/AdminUserItem";
import { userAPI } from "../../services/UserService";
import { User } from "../../types/User";

import "./Admin.scss";

const Admin = () => {
  const { data: users } = userAPI.useGetUsersQuery();
  const [deleteUser] = userAPI.useDeleteUserMutation();

  const [usersList, setUsersList] = useState(users);

  const onUserDelete = (id: number | undefined) => {
    if (window.confirm("Вы хотите удалить пользователя?")) {
      deleteUser(id);
      alert("Пользователь удалён");
      setUsersList(
        usersList && [...usersList].filter((user) => user.id !== id)
      );
    }
  };

  return (
    <div className="admin">
      <div className="container">
        <h1 className="admin__title">Админ-панель</h1>
        <div className="admin__users">
          <div className="admin__users-title">Список пользователей</div>
          {usersList &&
            usersList.map((user: User) => (
              <AdminUserItem
                user={user}
                onDelete={() => onUserDelete(user?.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
