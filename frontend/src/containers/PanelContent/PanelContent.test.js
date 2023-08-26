import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PanelContent from "./PanelContent";

afterEach(cleanup);

jest.mock("../../stores/questionCountStore", () => ({
  useQuestionCountContext: jest.fn(() => ({ questionCount: 1 })),
}));

jest.mock("../../stores/selectedCityStore", () => ({
  useSelectedCityContext: jest.fn(() => ({ selectedCity: { name: "Sydney" } })),
}));

describe("PanelContent Component", () => {
  it("should render city options as buttons", () => {
    const mockClickCityOption = jest.fn();

    // Mock data
    const citiesData = [
      { name: "City A" },
      { name: "City B" },
      { name: "City C" },
    ];
    const selectedCity = { name: "City A" };

    render(
      <PanelContent
        cities={citiesData}
        selectedCity={selectedCity}
        clickCityOption={mockClickCityOption}
        showCityInfo={false}
        questionCount={1}
        score={0}
      />
    );

    const cityOptionButtons = screen.getAllByRole("button");

    expect(cityOptionButtons).toHaveLength(citiesData.length);
  });
});
