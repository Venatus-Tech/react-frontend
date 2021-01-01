import { React, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import "./Events.css";
import PaperPer from "./Paper";
import Modal from "./Modal";
import PaperSec from "./PaperSec";
import Arr from "./cardData";

function CardEvent(CardInfo) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <PaperPer
        title={CardInfo.title}
        picture={CardInfo.imgUrl}
        information={CardInfo.info}
      ></PaperPer>
    </Grid>
  );
}
function Events() {
  return (
    <div className='event'>
      <div className='heading'>
        <h1 className='heading-one'> Future Events</h1>
      </div>
      <div className='gridd-one'>
        <Grid container spacing={2} alignItems='center' justify='center'>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <PaperPer
                picture={"/EventImages/futureEventsSample3.jpg"}
              ></PaperPer>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <PaperPer
                picture={"/EventImages/futureEventsSample.jpg"}
              ></PaperPer>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <PaperPer
                picture={"/EventImages/futureEventsSample2.jpg"}
              ></PaperPer>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='heading'>
        <h1 className='heading-one'> Past Events</h1>
      </div>
      <div className='past-events'>
        <div className='gridd'>
          <Grid container spacing={2} alignItems='center' justify='center'>
            {Arr.map(CardEvent)}
          </Grid>
        </div>
      </div>
      {/*<div className='past-events'>
<div className='gridd'>
          <Grid container spacing={2} alignItems='center' justify='center'>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperPer
                  picture={"/EventImages/aimbot.jpg"}
                  title='Moksha19|Juego'
                ></PaperPer>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperPer
                  picture={"/EventImages/pokeballHoopla.jpg"}
                  title='Moksha19|Alfresco'
                ></PaperPer>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperPer
                  picture={"/EventImages/RelEvent.jpg"}
                  title='Relay Event'
                ></PaperPer>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='gridd'>
          <Grid container spacing={2} alignItems='center' justify='center'>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec
                  picture={"/EventImages/futureEventsSample3.jpg"}
                  title='Frolic'
                ></PaperSec>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec
                  picture={"/EventImages/retrogaming.jpg"}
                  title='Retro Gaming'
                ></PaperSec>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='gridd'>
          <Grid container spacing={2} alignItems='center' justify='center'>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec
                  picture={"/EventImages/futureEventsSample.jpg"}
                  title='Spectre'
                ></PaperSec>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec
                  picture={"/EventImages/GCL.jpg"}
                  title='Gamers Changing Lives'
                ></PaperSec>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <PaperSec picture={"/EventImages/GCL.jpg"}></PaperSec>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>*/}
    </div>
  );
}
export default Events;
