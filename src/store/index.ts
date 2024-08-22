/**

import { createContext, useReducer } from 'react';

const initialState = {};
const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

*/