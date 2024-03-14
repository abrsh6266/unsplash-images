import { createContext, useContext } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  return <appContext.Provider value={{}}>{children}</appContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(appContext);
};
