import React from "react";
import ReactDom from "react-dom";

function Modal(props) {
  if (props.open != true) return null;
  return (
    ReactDom.createPortal(
      <div className='modal-overlay'>
        <div className='modal-ui'>
          <h1>Portal is open</h1>
        </div>
      </div>
    ),
    document.getElementById("portal")
  );
}
