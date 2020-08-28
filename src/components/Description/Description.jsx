import React, { useContext } from 'react';
import classes from './Description.module.scss';
import Player from '../Player/Player';
import { MainContext } from '../../context/context';

const Description = () => {
  const descriptionContext = useContext(MainContext);
  const { clickVariant, data, activeQuestion } = descriptionContext;

  const dataQuestion = data[activeQuestion][clickVariant];

  return (
    <div className={classes.Description}>
      {clickVariant !== null
        ? (
          <div className={classes.descriptionOn}>
            <div className={classes.media}>
              <div style={{ backgroundImage: `url(${dataQuestion.image})` }} className={classes.img} />
              <div className={classes.audio}>
                <p className={classes.name}>{dataQuestion.name}</p>
                <p className={classes.species}>{dataQuestion.species}</p>
                <Player url={dataQuestion.audio} />
              </div>
            </div>
            <p className={classes.text}>{dataQuestion.description}</p>
          </div>
        )

        : (
          <div className={classes.start}>
            <p>
              Послушайте плеер.
            </p>
            <p>
              Выберите птицу из списка
            </p>
          </div>
        )}

    </div>
  );
};

export default Description;
