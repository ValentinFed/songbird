import React, { useContext } from 'react';
import classes from './Question.module.scss';
import Player from '../Player/Player';
import { MainContext } from '../../context/context';

const Question = () => {
  const questionContext = useContext(MainContext);
  const {
    data, activeQuestion, rightAnswer, rightAnswerDone,
  } = questionContext;

  let dataQuestion = null;

  rightAnswerDone
    ? dataQuestion = data[activeQuestion][rightAnswer]
    : dataQuestion = {
      name: '*****',
      image: require('../../images/bird.svg'),
      audio: data[activeQuestion][rightAnswer].audio,
    };

  return (
    <div className={classes.Question}>
      <div style={{ backgroundImage: `url(${dataQuestion.image})` }} className={classes.img} />
      <div className={classes.description}>
        <h2 className={classes.name}>{dataQuestion.name}</h2>
        <div className={classes.line} />
        <Player url={dataQuestion.audio} />
      </div>
    </div>
  );
};

export default Question;
