import React, { useContext } from 'react';
import classes from './Description.module.scss';
import Player from '../Player/Player';
import { MainContext } from '../../context/context';

const Description = () => {
  const descriptionContext = useContext(MainContext);
  const { clickVariant, data, activeQuestion } = descriptionContext;

  const dataDescription = data[activeQuestion][clickVariant];

  return (
    <div className={classes.Description}>
      {clickVariant !== null
        ? (
          <div className={classes.descriptionOn}>
            <div className={classes.media}>
              <div style={{ backgroundImage: `url(${dataDescription.image})` }} className={classes.img} />
              <div className={classes.audio}>
                <p className={classes.name}>{dataDescription.name}</p>
                <p className={classes.species}>{dataDescription.species}</p>
                <Player url={dataDescription.audio} />
              </div>
            </div>
            <p className={classes.text}>{dataDescription.description}</p>
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
