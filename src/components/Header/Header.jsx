import React, { useContext } from 'react';
import classes from './Header.module.scss';
import { MainContext } from '../../context/context';

const titleQuestions = [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

const Header = () => {
  const headerContext = useContext(MainContext);

  console.log(headerContext);

  return (
    <div className={classes.Header}>
      <div className={classes.header__top}>
        <h1 className={classes.logo}>SongBird</h1>
        <p className={classes.scope}>
          Score:
          <span>{headerContext.scope}</span>
        </p>
      </div>

      <ul className={classes.title__items}>
        { titleQuestions.map((item, index) => (index === headerContext.activeQuestion
          ? <li key={index} className={[classes.title__item, classes.active].join(' ')}>{item}</li>
          : <li key={index} className={classes.title__item}>{item}</li>
        ))}
      </ul>

    </div>
  );
};

export default Header;
