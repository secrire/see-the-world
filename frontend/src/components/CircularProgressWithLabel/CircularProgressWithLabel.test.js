import { render, screen } from "@testing-library/react";

import CircularProgressWithLabel from "./CircularProgressWithLabel";

describe("CircularProgressWithLabel", () => {
  it("renders the component with default color", () => {
    render(<CircularProgressWithLabel label={5} />);

    const labelElement = screen.getByText("5");
    expect(labelElement).toBeTruthy();
  });
});
