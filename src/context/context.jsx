import React, { useReducer } from 'react';
import birdsData from '../data/data';

export const MainContext = React.createContext();

const initialState = {
  scope: 0,
  activeQuestion: 0,
  data: birdsData,
  rightAnswer: 0,
  clickVariant: null,
  rightAnswerDone: false,
  counterClick: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'nextQuestion': return {
      ...state,
      activeQuestion: state.activeQuestion + 1,
      clickVariant: null,
      rightAnswerDone: false,
      rightAnswer: action.rightAnswerRandom,
      counterClick: 0,
    };
    case 'clickVariant': return { ...state, clickVariant: action.index, counterClick: state.counterClick + 1 };
    case 'clickVariantHaveRightAnswer': return { ...state, clickVariant: action.index };
    case 'random': return { ...state, rightAnswer: action.rightAnswerRandom };
    case 'haveRightAnswer': return { ...state, rightAnswerDone: true, scope: state.scope + (5 - state.counterClick) };
    default: return state;
  }
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextQuestion = (rightAnswerRandom) => dispatch({ type: 'nextQuestion', rightAnswerRandom });
  const onClickVariant = (index) => dispatch({ type: 'clickVariant', index });
  const onClickVariantHaveRightAnswer = (index) => dispatch({ type: 'clickVariantHaveRightAnswer', index });
  const random = (rightAnswerRandom) => dispatch({ type: 'random', rightAnswerRandom });
  const haveRightAnswer = () => dispatch({ type: 'haveRightAnswer' });

  return (
    <MainContext.Provider
      value={{
        scope: state.scope,
        activeQuestion: state.activeQuestion,
        data: state.data,
        clickVariant: state.clickVariant,
        rightAnswer: state.rightAnswer,
        rightAnswerDone: state.rightAnswerDone,
        counterClick: state.counterClick,
        nextQuestion,
        onClickVariant,
        random,
        haveRightAnswer,
        onClickVariantHaveRightAnswer,

      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
