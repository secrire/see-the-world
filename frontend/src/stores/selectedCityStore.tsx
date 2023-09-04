import { createContext, useState, useContext, useMemo, ReactNode } from "react";

import { CityType } from "../pages/MapQuiz";

type SelectedCityContextType = {
  selectedCity: CityType | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<CityType | null>>;
};

type SelectedCityProviderProps = {
  children?: ReactNode;
};

export const SelectedCityContext =
  createContext<SelectedCityContextType | null>(null);

export const useSelectedCityContext = () => {
  const context = useContext(SelectedCityContext);
  if (!context) {
    throw new Error(
      "useSelectedCityContext must be used within a SelectedCityProvider"
    );
  }
  return context;
};

export const SelectedCityProvider = ({
  children,
}: SelectedCityProviderProps) => {
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const contextValue = useMemo(
    () => ({ selectedCity, setSelectedCity }),
    [selectedCity]
  );

  return (
    <SelectedCityContext.Provider
      // value={{
      //   selectedCity,
      //   setSelectedCity,
      // }}
      value={contextValue}
    >
      {children}
    </SelectedCityContext.Provider>
  );
};

export default SelectedCityProvider;
