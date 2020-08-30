import React, { useContext } from 'react';
import classes from './Finish.module.scss';
import { MainContext } from '../../context/context';

const Finish = () => {
  const finishContext = useContext(MainContext);
  const { scope, backToStart } = finishContext;

  return (
    scope === 30
      ? (
        <div>
          <h2>Поздравляем!</h2>
          <p>
            Вы набрали
            {scope}
            баллов из 30 возможных.
          </p>
          <p onClick={() => backToStart()}>Попробовать еще раз!</p>
        </div>

      )
      : (
        <div>
          <h2>Поздравляем!</h2>
          <p>
            Вы набрали
            {scope}
            баллов из 30 возможных.
          </p>
          <p onClick={() => backToStart()}>Попробовать еще раз!</p>
        </div>
      )
  );
};

export default Finish;
