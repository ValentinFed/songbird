import React, { useContext } from 'react';
import classes from './Variants.module.scss';
import { MainContext } from '../../context/context';

const Variants = () => {
  const variats = useContext(MainContext);
  const data = variats.data[0];

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
