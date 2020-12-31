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
import Modal from "./Modal";
import PaperSec from "./PaperSec";
import Gcl from "./GCL.jpg";
function Events() {
  const [isOpen, setOpen] = useState(false);
  function onClicked() {
    setOpen(true);
    console.log("clicked");
  }
  return (
    <div className='event'>
      <div className='heading'>
        <h1 className='heading-one'> Future Events</h1>
      </div>
      <div className='gridd-one'>
        <Grid container spacing={2} alignItems='center' justify='center'>
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={onClicked}>
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
        <div className='gridd'>
          {" "}
          <Grid container spacing={2} alignItems='center' justify='center'>
            <Grid item xs={12} sm={6} md={4}>
              <div onClick={onClicked}>
                <PaperPer picture={aimbot} title='Moksha19|Juego'></PaperPer>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperPer picture={poke} title='Moksha19|Alfresco'></PaperPer>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperPer picture={RelEvent} title='Relay Event'></PaperPer>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='gridd'>
          <Grid container spacing={2} alignItems='center' justify='center'>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec picture={pic3} title='Frolic'></PaperSec>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec picture={retro} title='Retro Gaming'></PaperSec>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='gridd'>
          <Grid container spacing={2} alignItems='center' justify='center'>
            <Grid item xs={12} sm={6} md={4}>
              <div onClick={onClicked}>
                <PaperSec picture={pic} title='Spectre'></PaperSec>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec
                  picture={Gcl}
                  title='Gamers Changing Lives'
                ></PaperSec>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec picture={pic2}></PaperSec>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      {isOpen ? (
        <Modal
          close={() => {
            setOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}
export default Events;
