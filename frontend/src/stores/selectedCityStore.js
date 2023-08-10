import React, { useState, createContext, useContext, useEffect } from "react";

export const SelectedCityContext = createContext();

export const useSelectedCityContext = () => useContext(SelectedCityContext);

export const SelectedCityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (selectedCity) {
      localStorage.setItem("selectedCityStore", JSON.stringify(selectedCity));
    }
  }, [selectedCity]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("selectedCityStore"))) {
      setSelectedCity(JSON.parse(localStorage.getItem("selectedCityStore")));
    }
  }, []);

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
