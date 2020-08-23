import React, { useReducer } from 'react';

export const MainContext = React.createContext();

const initialState = {
    scope: 22,
    activeQuestion: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "nextQuestion": return {...state, activeQuestion: state.activeQuestion+1}
        default: return state
    }
}

const MainProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const nextQuestion = () => dispatch({ type: 'nextQuestion'});

    return (
        <MainContext.Provider value={{
                scope: state.scope,
                activeQuestion: state.activeQuestion,
                nextQuestion,
        }}>
            {children}
        </MainContext.Provider>
    );

};

export default MainProvider;