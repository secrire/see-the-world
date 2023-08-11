import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CircularProgressWithLabel from "./CircularProgressWithLabel";

afterEach(cleanup);

jest.mock("../../stores/questionCountStore", () => ({
  useQuestionCountContext: jest.fn(() => ({ questionCount: 5 })),
}));

test("renders CircularProgressWithLabel component", () => {
  render(<CircularProgressWithLabel />);

  const questionCountElement = screen.getByText(5);
  expect(questionCountElement).toBeInTheDocument();
});
