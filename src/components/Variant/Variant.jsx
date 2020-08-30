import React, { useContext, useState, useEffect } from 'react';
import classes from './Variant.module.scss';
import { MainContext } from '../../context/context';

const Variant = ({ variat, index }) => {
  const [classList, setClassList] = useState([classes.Variant]);
  const variatContext = useContext(MainContext);
  const {
    rightAnswer, rightAnswerDone, haveRightAnswer, onClickVariant, activeQuestion, onClickVariantHaveRightAnswer,
  } = variatContext;

  const handleClick = (item) => {
    if (rightAnswer === item) {
      setClassList([...classList, classes.true]);
      haveRightAnswer();
      onClickVariant(index);
    } else {
      setClassList([...classList, classes.false]);
      onClickVariant(index);
    }
  };

  useEffect(() => () => {
    setClassList([classes.Variant]);
  },
  [activeQuestion]);

  return (

    classList.includes(classes.true) || classList.includes(classes.false) || rightAnswerDone
      ? (
        <p className={classList.join(' ')} onClick={() => onClickVariantHaveRightAnswer(index)}>
          <span />
          {variat.name}
        </p>
      )
      : (
        <p className={classList.join(' ')} onClick={() => handleClick(index)}>
          <span />
          {variat.name}
        </p>
      )
  );
};

export default Variant;
