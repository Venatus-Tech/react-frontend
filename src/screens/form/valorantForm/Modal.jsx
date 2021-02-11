import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDom from "react-dom";
import "./valorant.module.css";

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
        {props.game === "valorant" ? (
          <p className="modal-para">
            <strong>
              Entry Fee: The Team will be comprised of 5 Members. ( Entry fee
              for the whole team is 500 Rupees, 100 Rupees Per Person )
            </strong>
            <br />
            <strong> The Teams can have 1 substitute.</strong>
            <br />
            In order to enter the tournament participants have to register with
            a team of five. <br />
            <strong> Tournament Settings:</strong>
            <br />
            Bracket Type: Best Of 1, Knockout Format.
            <br />
            Finals will be Best of 3.
            <br />
            Match Type: Winner of the match will advance to next round
            <br />
            Winner: First to 13 rounds or +2 differential in overtime
            <br />
            No Show Time: 10 minutes
            <br />
            Match Ready time: 5 minutes
            <br />
            Format: 5v5
            <br />
            Platforms: PC
            <br />
            Mode: Tournament
            <br />
            <br />
            <strong>
              {" "}
              A normal VETO would take place for choosing sides and maps from
              the map-pool on discord with a moderator from Venatus, after which
              moderator will be hosting the custom server for the same.
            </strong>{" "}
            <br />
            Maps :<br />
            Ascent
            <br />
            Bind <br />
            Haven
            <br />
            Split
            <br />
            Icebox
            <br />
            <br />
            Skins are Allowed.
            <br />
            <br />
            <strong>
              {" "}
              Zero Tolerance for Hacking/ Cheating. If anyone is found guilty
              using any sort of hack, the whole team will be disqualified and
              will not be allowed to participate in future events.
            </strong>
            <br />
            <br />
            <strong>
              Every team will be given the opportunity to show up to their
              match, we require that you be online at least 15 minutes prior to
              your match in order to check-in. If you are not online and checked
              in at that time, we will forfeit your team.
            </strong>
            <br />
            <br />
            <strong>
              If a team suffers a disconnection, the player will be given 10
              minutes to reconnect to the game (the team with the disconnection
              can request for a pause). If they have not reconnected in that
              time, the team will have to continue playing without that player.
            </strong>
            <br />
            <br />
            <strong>
              Teams must take screenshots after the game has concluded and be
              able to provide this info when request. Moderators will be
              spectating the match all the way to the end and the final result
              will be posted on the group with a screenshot of the same.
            </strong>
            <br />
            <br />
            <strong>
              If a participant of any team is being toxic, using hateful speech
              for fellow players or the opponents his/her team would be
              subjected to disqualification. That decision lies with the
              moderator of the match. He/ she can also consult the rest of the
              team or the game head regarding the same.
            </strong>{" "}
            <br />
            <br />
            <strong>
              Fixtures will be provided to the captains of all the team via the
              Whatsapp group only, including the timings for all the games.
              (Mind that it won’t be changed in any case after the tournament
              has begun).
            </strong>
            <br />
            <br />
            <strong> No Refund will be provided in any case.</strong>
          </p>
        ) : null}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
