import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {/* {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )} */}
      <Backdrop onClose={props.onClose} />
      <ModalOverlay> {props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
