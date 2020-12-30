import { React, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import "./Events.css";
import pic from "./futureEventsSample.jpg";
import pic2 from "./futureEventsSample2.jpg";
import CardPer from "./Card";
import pic3 from "./futureEventsSample3.jpg";
import innoPic from "./pastEventInno.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PaperPer from "./Paper";
import aimbot from "./aimbot.jpg";
import poke from "./pokeballHoopla.jpg";
import retro from "./retrogaming.jpg";
import RelEvent from "./RelEvent.jpg";
function Events() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className='heading'>
        <h1 className='heading-one'> Future Events</h1>
      </div>
      <div className='gridd'>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={() => setOpen(true)}>
              <PaperPer picture={pic}></PaperPer>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <PaperPer picture={pic2}></PaperPer>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <PaperPer picture={pic3}></PaperPer>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='heading'>
        <h1 className='heading-one'> Past Events</h1>
      </div>
      <div className='past-events'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            <PaperPer picture={aimbot} />
            <PaperPer picture={poke} />
            <PaperPer picture={retro} />
            <PaperPer picture={RelEvent} />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
export default Events;
