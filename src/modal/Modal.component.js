import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children }) =>
  ReactDOM.createPortal(children, modalRoot);
