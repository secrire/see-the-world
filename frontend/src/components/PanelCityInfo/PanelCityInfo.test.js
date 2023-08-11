
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PanelCityInfo from "./PanelCityInfo";

afterEach(cleanup);

jest.mock("../../stores/selectedCityStore", () => ({
  useSelectedCityContext: jest.fn(() => ({ selectedCity: {
    country: 'Germany',
    continent: 'Europe',
    population: '1472000',
    founded: '1158',
    landmarks: ['Bavaria statue', 'Marienplatz', 'ottonova office'],
  } })),
}));

describe('PanelCityInfo', () => {
  it('renders city information correctly', () => {
    const { getByText } = render(<PanelCityInfo />)

    expect(getByText('Country')).toBeInTheDocument();
    expect(getByText('Germany')).toBeInTheDocument();
    expect(getByText('Contient')).toBeInTheDocument();
    expect(getByText('Europe')).toBeInTheDocument();
    expect(getByText('Population')).toBeInTheDocument();
    expect(getByText('1472000')).toBeInTheDocument();
    expect(getByText('Founded')).toBeInTheDocument();
    expect(getByText('1158')).toBeInTheDocument();
    expect(getByText('- Bavaria statue')).toBeInTheDocument();
    expect(getByText('- Marienplatz')).toBeInTheDocument();
    expect(getByText('- ottonova office')).toBeInTheDocument();
  });
});
