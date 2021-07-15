import styles from '../styles/app.module.css';

import React, { useState } from 'react';
import Carousel from './Carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const SLIDE_INFO = [
  { backgroundColor: '#ff7c7c', title: 'Slide 1' },
  { backgroundColor: '#ffb6b9', title: 'Slide 2' },
  { backgroundColor: '#8deaff', title: 'Slide 3' },
  { backgroundColor: '#ffe084', title: 'Slide 4' },
  { backgroundColor: '#d9d9d9', title: 'Slide 5' },
];
function Arrow(props: any) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;

  return <div onClick={clickFunction}>{icon}</div>;
}

function App() {
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const onArrowClick = (direction: any) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };
  return (
    <div className="App">
      <Arrow direction="left" clickFunction={() => onArrowClick('left')} />
      <Carousel content={content} />
      <Arrow direction="right" clickFunction={() => onArrowClick('right')} />
    </div>
  );
}

export default App;
