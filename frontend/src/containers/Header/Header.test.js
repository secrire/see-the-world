import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders the component with the correct text", () => {
    render(<Header />);

    const seeTheWText = screen.getByText("See the w");
    expect(seeTheWText).toBeTruthy();

    const rldText = screen.getByText("rld");
    expect(rldText).toBeTruthy();
  });
});
