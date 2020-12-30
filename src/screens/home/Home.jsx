import React from "react";
import Banner from "../../assets/ven-ban.png";
import LinkPanel from "../../components/LinkPanel/LinkPanel";
import { Grid } from "@material-ui/core";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

import "./Home.css";
import IconCard from "../../components/IconCard/IconCard";

//lorem ipsum dolor sit amet, sols loeal random words to fill up space

function Home() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <img src={Banner} alt="Banner" className="banner" />

      <LinkPanel />

      {/* Icon divs start */}
      <Grid
        container
        style={{ width: "70%", margin: "9rem 0", fontSize: "1.2rem" }}
      >
        <IconCard
          icon={icon1}
          text="lorem ipsum dolor sit amet, sols loeal random words to fill up
              space"
        />
        <IconCard
          icon={icon2}
          text="lorem ipsum dolor sit amet, sols loeal random words to fill up
              space"
        />
        <IconCard
          icon={icon3}
          text="lorem ipsum dolor sit amet, sols loeal random words to fill up
              space"
        />
      </Grid>

      {/* Icon divs end here */}

      {/* Subscription email div starts here */}

      {/* Subscription email div ends here */}
    </div>
  );
}
export default Home;
