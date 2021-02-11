import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDom from "react-dom";
import "./codm.module.css";

function Modal(props) {
  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div
        className="modal-ui"
        style={{
          height: "80vh",
          overflow: "auto",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div onClick={props.close}>
          <i className="icon-modal">⚔</i>
        </div>
        <h1 className="modal-heading">Rules</h1>
        {props.game === "codm" ? (
          <p className="modal-para">
            <strong>
              {" "}
              1)The teams will be comprised of 5 members.The entry fee for the
              whole team is ₹ 150.
            </strong>{" "}
            <br />
            <strong>
              2)The tournament will be conducted in a knockout format
            </strong>
            .<br />
            <strong> 3)Each match will take place in 3 rounds</strong>-<br />
            a)The first being <strong>Domination</strong> <br />
            b)Second being <strong>Hardpoint</strong> <br />
            c)third will be <strong>Search and Destroy</strong> <br />
            <strong>
              {" "}
              4)Scorestreaks are not allowed. Using them will result in instant
              disqualification
            </strong>
            .<br />
            <strong>
              5)No emulators and hacks are allowed, if anyone is found guilty of
              using them the whole team will be disqualified
            </strong>
            .<br />
            <strong>
              Note - Even if you don't have a team you can still participate,
              but atleast 2 players (including captain) are require
            </strong>
            d<br />
            <strong>6)NO REFUND will be provided in any case</strong>.<br />
            <strong>
              Prizes : Cash pool prize and other exciting accessories
              <br />
            </strong>
          </p>
        ) : null}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
