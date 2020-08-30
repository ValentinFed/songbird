import React, { useContext } from 'react';
import classes from './Variants.module.scss';
import { MainContext } from '../../context/context';
import Variant from '../Variant/Variant';

const Variants = () => {
  const variatsContext = useContext(MainContext);
  const { activeQuestion } = variatsContext;
  const data = variatsContext.data[activeQuestion];

  return (
    <div className={classes.Variants}>

      {data.map((variat, index) => (
        <Variant
          key={index}
          variat={variat}
          index={index}
        />
      ))}

    </div>
  );
};

export default Variants;
