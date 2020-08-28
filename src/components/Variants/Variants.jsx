import React, { useContext } from 'react';
import classes from './Variants.module.scss';
import { MainContext } from '../../context/context';

const Variants = () => {
  const variatsContext = useContext(MainContext);
  const { activeQuestion } = variatsContext;
  const data = variatsContext.data[activeQuestion];

  return (
    <div className={classes.Variants}>

      {data.map((variat, index) => (
        <p key={index} className={classes.variant}>
          <span />
          {variat.name}
        </p>
      ))}

    </div>
  );
};

export default Variants;
