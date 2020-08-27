import React from 'react';
import classes from './Question.module.scss';
import Player from '../Player/Player';

const Question = () => {
  const initialQuestion = {
    img: require('../../images/bird.svg'),
    name: '*****',
    audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
  };

  return (
    <div className={classes.Question}>
      <div style={{ backgroundImage: `url(${initialQuestion.img})` }} className={classes.img} />
      <div className={classes.description}>
        <h2 className={classes.name}>{initialQuestion.name}</h2>
        <div className={classes.line} />
        <Player url={initialQuestion.audio} />
      </div>
    </div>
  );
};

export default Question;
