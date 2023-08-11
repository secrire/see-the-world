import React, { useState, createContext, useContext } from "react";

export const SelectedCityContext = createContext();

export const useSelectedCityContext = () => useContext(SelectedCityContext);

export const SelectedCityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <SelectedCityContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
      }}
    >
      {children}
    </SelectedCityContext.Provider>
  );
};

export default SelectedCityProvider;
