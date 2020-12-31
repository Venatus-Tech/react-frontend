import React from "react";
import ReactDom from "react-dom";

function Modal(props) {
  return ReactDom.createPortal(
    <div className='modal-overlay'>
      <div className='modal-ui'>
        <h1>Portal is open</h1>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
