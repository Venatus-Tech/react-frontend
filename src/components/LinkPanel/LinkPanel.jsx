import React from "react";
import discord from "../../assets/discord-icon.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./LinkPanel.css";
const LinkPanel = () => {
  return (
    <div className="panel">
      <div
        onClick={() => window.open("https://www.facebook.com/VenatusNSIT")}
        className="icon-div"
      >
        <FacebookIcon className="icons-panel" />
      </div>
      <div
        onClick={() => window.open("https://www.instagram.com/venatusnsut")}
        className="icon-div"
      >
        <InstagramIcon className="icons-panel" />
      </div>
      <div
        onClick={() => window.open("https://discord.gg/A6Mcmwd")}
        className="icon-div"
      >
        <img src={discord} alt="discord-icon" className="discord" />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://www.youtube.com/channel/UCQtvpmbExCHXS9M8EVEvGWQ"
          )
        }
        className="icon-div"
      >
        <YouTubeIcon className="icons-panel" />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://in.linkedin.com/organization-guest/company/venatusnsut?challengeId=AQFmM_p0_62wlQAAAXL0p6cozOa34pcU8LkD9aG-aI4wxJqEgMiyrJO3LZBQljNP2dhdsNgL4u9u9243tTB_ljFX8h_mL_4mTw&submissionId=cad67625-a355-1c16-eaa5-3ecf92716529"
          )
        }
        className="icon-div"
      >
        <LinkedInIcon className="icons-panel" />
      </div>
    </div>
  );
};

export default LinkPanel;
