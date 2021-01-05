import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDom from "react-dom";
import "./communities.css";
import Whatsapp from "../../assets/Vector.png";
import Discord from "../../assets/discord-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/fontawesome-svg-core";

function Modal(props) {
  return ReactDom.createPortal(
    <div className='modal-overlay'>
      <div className='modal-ui'>
        <div onClick={props.close}>
          <i className='icon-modal'>⚔</i>
        </div>

        <img className='modal-img' src={props.imgUrl}></img>
        <h1 className='modal-heading'>{props.title}</h1>
        <p className='modal-para'>{props.info}</p>
        <p className='para-icon'>Discord Link: </p>
        <div>
          <img src={Discord} alt='discord-icon' className='icons' />
        </div>
        <p className='para-icon'>Whatsapp Link: </p>
        <div>
          <img src={Whatsapp} alt='discord-icon' className='icons' />
        </div>
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
