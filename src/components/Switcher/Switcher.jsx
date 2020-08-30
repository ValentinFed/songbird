import React, { useContext } from 'react';
import classes from './Switcher.module.scss';
import { MainContext } from '../../context/context';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Question from '../Question/Question';
import Variants from '../Variants/Variants';
import NextButton from '../NextButton/NextButton';
import Finish from '../Finish/Finish';

const Switcher = () => {
  const switcherContext = useContext(MainContext);
  const { activeQuestion, data } = switcherContext;

  return (
    <>
      { activeQuestion === data.length
        ? <Finish />
        : (
          <>
            <Header />
            <Question />
            <NextButton />
            <div className={classes.answer}>
              <Variants />
              <Description />
            </div>
          </>
        )}
    </>

  );
};

export default Switcher;
