import React, { useReducer } from 'react';
import birdsData from '../data/data';

export const MainContext = React.createContext();

const initialState = {
  scope: 0,
  activeQuestion: 0,
  data: birdsData,
  rightAnswer: null,
  clickVariant: null,
  rightAnswerDone: false,
};

// const rightAnswetRandom = () => Math.round(Math.random() / 2 * 10);

const reducer = (state, action) => {
  switch (action.type) {
    case 'nextQuestion':
      return { ...state, activeQuestion: state.activeQuestion + 1 };
    default:
      return state;
  }
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextQuestion = () => dispatch({ type: 'nextQuestion' });

  return (
    <MainContext.Provider
      value={{
        scope: state.scope,
        activeQuestion: state.activeQuestion,
        data: state.data,
        nextQuestion,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
