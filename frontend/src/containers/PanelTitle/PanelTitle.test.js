import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PanelTitle from "./PanelTitle";

afterEach(cleanup);

jest.mock("../../stores/questionCountStore", () => ({
  useQuestionCountContext: jest.fn(() => ({ questionCount: 0 })),
}));

jest.mock("../../stores/selectedCityStore", () => ({
  useSelectedCityContext: jest.fn(() => ({
    selectedCity: {
      name: "Munich",
      country: "Germany",
      continent: "Europe",
      population: "1472000",
      founded: "1158",
      landmarks: ["Bavaria statue", "Marienplatz", "ottonova office"],
    },
  })),
}));

describe("PanelTitle", () => {
  const mockCitiesLength = 10;

  it("renders the correct title when questionCount is 0", () => {
    render(
      <PanelTitle citiesLength={mockCitiesLength} showCityInfo={false} />
    );

    expect(screen.getByText("Let's Play")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Do you feel confident? Here you'll challenge one of our most difficult city questions!"
      )
    ).toBeInTheDocument();
  });
});
