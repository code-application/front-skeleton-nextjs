import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
  });

  it("displays the correct initial text", () => {
    const { getByText } = render(<Home />);
    expect(
      getByText("Get started by editing src/app/Home.tsx"),
    ).toBeInTheDocument();
  });
});
