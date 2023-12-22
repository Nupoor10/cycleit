import React from "react";
import { ImCancelCircle } from "react-icons/im";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children, canvas }) => {
  return (
    <>
      <div className={isOpen ? "overlay" : "hidden"} onClick={closeModal}></div>
      <div className={isOpen ? "modal" : "hidden"}>
        <button className="closeButton" onClick={closeModal}>
          <ImCancelCircle/>
        </button>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;