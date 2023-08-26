import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Panel from "./Panel";

afterEach(cleanup);

jest.mock("../../stores/questionCountStore", () => ({
  useQuestionCountContext: jest.fn(() => ({ questionCount: 1 })),
}));

jest.mock("../../stores/selectedCityStore", () => ({
  useSelectedCityContext: jest.fn(() => ({ selectedCity: { name: "Berlin" } })),
}));

const citiesData = [{ name: "City A" }, { name: "City B" }, { name: "City C" }];

test("clickCityOption render correctly", () => {
  const mockSetShowCityInfo = jest.fn();
  const mockSetScore = jest.fn();

  render(
    <Panel
      cities={citiesData}
      showCityInfo={false}
      setShowCityInfo={mockSetShowCityInfo}
      clickNextQuestion={() => {}}
      clickPlayAgain={() => {}}
      score={0}
      setScore={mockSetScore}
    />
  );

  const cityOptionButtons = screen.getAllByRole("button");
  fireEvent.click(cityOptionButtons[0]);

  expect(mockSetShowCityInfo).toHaveBeenCalledWith(true);
  expect(cityOptionButtons.length).toBe(3);
});

