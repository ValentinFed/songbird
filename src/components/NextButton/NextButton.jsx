import React from 'react';
import classes from './NextButton.module.scss';

const NextButton = () => {
  const active = false;

  return (
    <div className={classes.NextButton}>
      {active
        ? <p onClick={() => console.log('next')} className={classes.NexeButtonActive}>Next level</p>
        : <p className={classes.NexeButton}>Next level</p>}
    </div>
  );
};

export default NextButton;
