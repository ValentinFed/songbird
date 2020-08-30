import React from 'react';
import classes from './App.module.scss';
import MainProvider from './context/context';
import Switcher from './components/Switcher/Switcher';

function App() {
  return (
    <div className={classes.App}>
      <MainProvider>
        <Switcher />
      </MainProvider>
    </div>
  );
}

export default App;
