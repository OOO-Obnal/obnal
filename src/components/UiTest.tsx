import React from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

const UiTest = () => {
  return (
    <div>
      <h1>UI</h1>
      <div style={{ display: "flex", gap: "0 10px", padding: "20px" }}>
        <Button type="add" text="Добавить товар" />
        <Button type="cancel" text="Отмена" />
        <Button type="black" text="Перейти" />
        <Button type="blue" text="Перейти" />
      </div>
      <div style={{ display: "flex", gap: "0 10px", padding: "20px" }}>
        <Input type="text" placeholder="Введите имя" variant="outlined" />
        <Input type="text" placeholder="Введите имя" variant="bordered" />
      </div>
    </div>
  );
};

export default UiTest;
