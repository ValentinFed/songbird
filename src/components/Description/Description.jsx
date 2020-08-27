import React from 'react';
import classes from './Description.module.scss';
import Player from '../Player/Player';

const Description = () => {
  const click = true;

  const initialQuestion = {
    img: require('../../images/bird.svg'),
    name: '*****',
    audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
  };
  return (
    <div className={classes.Description}>
      {click
        ? (
          <div className={classes.descriptionOn}>
            <div className={classes.media}>
              <div style={{ backgroundImage: `url(${initialQuestion.img})` }} className={classes.img} />
              <div className={classes.audio}>
                <p className={classes.name}>Name</p>
                <p className={classes.species}>Namea lat</p>
                <Player />
              </div>
            </div>
            <p className={classes.text}>
              description
              description
              description
              description
              description
              description
              description
              description
              description

            </p>
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
