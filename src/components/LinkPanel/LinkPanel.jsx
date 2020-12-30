import React from "react";
import fb from "../../assets/fb-icon.png";
import insta from "../../assets/insta-icon.png";
import discord from "../../assets/discord-icon.png";
import youtube from "../../assets/utube-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import "./LinkPanel.css";
const LinkPanel = () => {
  return (
    <div className="panel">
      <div>
        <img src={fb} alt="fb-icon" style={{ padding: "10px 15px" }} />
      </div>
      <div>
        <img src={insta} alt="insta-icon" className="icons" />
      </div>
      <div>
        <img src={discord} alt="discord-icon" className="icons" />
      </div>
      <div>
        <img src={youtube} alt="utube-icon" className="icons" />
      </div>
      <div>
        <img src={linkedin} alt="linkedin-icon" className="icons" />
      </div>
    </div>
  );
};

export default LinkPanel;
