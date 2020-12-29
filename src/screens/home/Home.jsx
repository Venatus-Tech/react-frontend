import React from "react";
import Banner from "../../assets/ven-ban.png";
import LinkPanel from "../../components/LinkPanel/LinkPanel";
import "./Home.css";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={Banner} alt="Banner" className="banner" />

      <LinkPanel />
    </div>
  );
}
export default Home;
