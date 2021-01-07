import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDom from "react-dom";
import "../../screens/communities/communities.css";
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

        <img className='modal-img-navbar' src={props.imgUrl}></img>
        <h1 className='modal-heading-navbar'>Orientation</h1>

        <p className='para-modal'>
          <a href='https://bit.ly/3omp5W0' className='modal-link'>
            Link to Microsoft Teams
          </a>
        </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
