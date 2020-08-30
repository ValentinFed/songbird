import React, { useContext } from 'react';
import classes from './Finish.module.scss';
import great from '../../images/great.gif';
import { MainContext } from '../../context/context';

const Finish = () => {
  const finishContext = useContext(MainContext);
  const { scope, backToStart } = finishContext;

  return (
    scope === 30
      ? (
        <div className={classes.Finish}>
          <h2 className={classes.name}>WOW!!!</h2>
          <p className={classes.text}>
            Вы набрали
            <span>
              {scope}
            </span>
            баллов из 30 возможных.
          </p>
          <img className={classes.img} src={great} alt="" />
          <p className={classes.button} onClick={() => backToStart()}>Попробовать еще раз!</p>
        </div>
      )
      : (
        <div className={classes.Finish}>
          <h2 className={classes.name}>Поздравляем!</h2>
          <p className={classes.text}>
            Вы набрали
            <span>
              {scope}
            </span>
            баллов из 30 возможных.
          </p>
          <p className={classes.button} onClick={() => backToStart()}>Попробовать еще раз!</p>
        </div>
      )
  );
};

export default Finish;
