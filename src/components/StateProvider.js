import React, { createContext, useContext, useReducer } from "react";

// Prepare the data layer
export const StateContext = createContext();

//This wrap our app and provide a data layer to all components
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <div>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    </div>
  );
};

//Pull data from data layer
export const useStateValue = () => useContext(StateContext);
