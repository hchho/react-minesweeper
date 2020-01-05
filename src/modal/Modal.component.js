import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./Modal.scss";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children }) => {
  useEffect(() => {
    modalRoot.style.width = "100%";
    modalRoot.style.height = "100%";

    return () => {
      modalRoot.style.width = "0";
      modalRoot.style.height = "0";
    };
  });

  return ReactDOM.createPortal(children, modalRoot);
};

export const ModalImpl = ({ InnerComponent, handleClose, ...props }) => (
  <Modal handleClose={handleClose}>
    <div className="modal__container">
      <div className="modal__bar">
        <span onClick={handleClose}>Close</span>
      </div>
      <InnerComponent {...props} />
    </div>
  </Modal>
);
