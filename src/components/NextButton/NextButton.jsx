import React, { useContext, useEffect } from 'react';
import classes from './NextButton.module.scss';

import { MainContext } from '../../context/context';

const NextButton = () => {
  const nextButtonContext = useContext(MainContext);
  const { rightAnswerDone, random, nextQuestion } = nextButtonContext;

  const rightAnswerRandom = Math.round(Math.random() * 5);

  useEffect(() => {
    random(rightAnswerRandom);
  }, []);

  return (
    <div className={classes.NextButton}>
      {rightAnswerDone
        ? <p onClick={() => nextQuestion(rightAnswerRandom)} className={classes.NexeButtonActive}>Next level</p>
        : <p className={classes.NexeButton}>Next level</p>}
    </div>
  );
};

export default NextButton;
