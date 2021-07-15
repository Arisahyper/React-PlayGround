import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
// import { ArrowBackIosIcon, ArrowForwardIos } from '@material-ui/icons';

const Carousel = (props: any) => {
  const { backgroundColor, title } = props.content;
  const useStyles = makeStyles(() => ({
    card: {
      backgroundColor,
      borderRadius: 5,
      padding: '75px 50px',
      margin: '0px 25px',
      width: '500px',
      boxShadow: '20px 20px 20px black',
      display: 'flex',
      justifyContent: 'center',
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <h1>{title}</h1>
      </Card>
    </div>
  );
};

export default Carousel;
