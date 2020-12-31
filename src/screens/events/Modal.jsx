import React from "react";
import ReactDom from "react-dom";
import "./Events.css";

function Modal(props) {
  return ReactDom.createPortal(
    <div className='modal-overlay'>
      <div className='modal-ui'>
        <h1>Portal is open</h1>
        <button onClick={props.close}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
