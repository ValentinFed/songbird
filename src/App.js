import React from 'react';
import classes from './App.module.scss';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Variants from './components/Variants/Variants';
import NextButton from './components/NextButton/NextButton';
import MainProvider from './context/context';

function App() {
  return (
    <div className={classes.App}>
      <MainProvider>
        <Header />
        <Question />
        <NextButton />
        <div className={classes.answer}>
          <Variants />
          <Description />
        </div>
      </MainProvider>
    </div>
  );
}

export default App;
