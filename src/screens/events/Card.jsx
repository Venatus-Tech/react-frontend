import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./Events.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function CardPer() {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant='h5' component='h2'>
          ben
        </Typography>

        <Typography color='textSecondary'>adjective</Typography>
        <Typography variant='body2' component='p'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default CardPer;
