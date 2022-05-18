import React, { Dispatch, FC, SetStateAction } from "react";

import "./Modal.scss";

interface ModalPropsType {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalPropsType> = ({ active, setActive }) => {
  return (
    <div className="modal">
      <div className="modal__content"></div>
    </div>
  );
};
export default Modal;
