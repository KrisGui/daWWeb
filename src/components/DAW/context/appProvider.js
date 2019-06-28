import React, { createContext } from "react";

export const AppCtx = createContext();

const AppProvider = (props) => {
  return (
    <AppCtx.Provider value={AppCtx}>
      {props.children}
    </AppCtx.Provider>
  )
}

export default AppProvider
