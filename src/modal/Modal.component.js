import ReactDOM from "react-dom";
import { useEffect } from "react";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children }) => {
  useEffect(() => {
    modalRoot.setAttribute("z-index", "1");
    modalRoot.setAttribute("width", "100%");
    modalRoot.setAttribute("height", "100%");
    return () => {
      modalRoot.setAttribute("z-index", "-1");
      modalRoot.setAttribute("width", "");
      modalRoot.setAttribute("height", "");
    };
  });

  return ReactDOM.createPortal(children, modalRoot);
};
