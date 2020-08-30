import React, { useContext } from 'react';
import classes from './Finish.module.scss';
import { MainContext } from '../../context/context';

const Finish = () => {
  const finishContext = useContext(MainContext);
  const { scope } = finishContext;
  console.log(scope);
  return (
    <p>
      Вы набрали
      {scope}
      баллов из 30 возможных.
    </p>
  );
};

export default Finish;
