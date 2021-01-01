import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDom from "react-dom";
import "./Events.css";

function Modal(props) {
  return ReactDom.createPortal(
    <div className='modal-overlay'>
      <div className='modal-ui'>
        <div onClick={props.close}>
          <i className='icon-modal'>⚔</i>
        </div>
        <h1 className='modal-heading'>{props.title}</h1>
        <img className='modal-img' src={props.imgUrl}></img>
        <p className='modal-para'>{props.info}</p>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
