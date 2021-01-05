import React from "react";
import "./communities.css";
import { Grid } from "@material-ui/core";
import Card from "./Paper";

function Communities() {
  return (
    <div className='community'>
      <h1 className='heading-community'>Communities</h1>
      <div className='grid-community'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card
              picture='/CommunityImages/codm.jpg'
              title='Call Of Duty Mobile'
            ></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card
              picture='/CommunityImages/valorant4k.jpg'
              title='Valorant'
            ></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card
              picture='/CommunityImages/minecraft4k.jpg'
              title='Minecraft'
            ></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card
              picture='/CommunityImages/csgo4k.jpg'
              title='Counter Strike GO'
            ></Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Communities;
