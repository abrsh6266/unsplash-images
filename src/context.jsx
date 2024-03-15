import { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext();
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-schema:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("darkTheme", newTheme);
  };
  useEffect(() => {
    console.log(isDarkTheme);
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
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
