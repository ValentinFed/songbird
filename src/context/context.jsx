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
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'nextQuestion': return {
      ...state,
      activeQuestion: state.activeQuestion + 1,
      clickVariant: null,
      rightAnswerDone: false,
      rightAnswer: action.rightAnswerRandom,
    };
    case 'clickVariant': return { ...state, clickVariant: action.index };
    case 'random': return { ...state, rightAnswer: action.rightAnswerRandom };
    case 'haveRightAnswer': return { ...state, rightAnswerDone: true };
    default: return state;
  }
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextQuestion = (rightAnswerRandom) => dispatch({ type: 'nextQuestion', rightAnswerRandom });
  const onClickVariant = (index) => dispatch({ type: 'clickVariant', index });
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
        nextQuestion,
        onClickVariant,
        random,
        haveRightAnswer,

      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
