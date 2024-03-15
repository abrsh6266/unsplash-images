import { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newTheme);
    console.log(body);
  };
  return (
    <appContext.Provider
      value={{
        toggleDarkTheme,
        isDarkTheme,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(appContext);
};
