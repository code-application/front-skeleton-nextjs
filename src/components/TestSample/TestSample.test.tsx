import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TestSample from "./TestSample";

describe("TestSample component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<TestSample />);
    expect(
      getByText("Welcome to Front Skeleton Project for Next.js!"),
    ).toBeInTheDocument();
  });

  it("displays the correct initial text", () => {
    const { getByText } = render(<TestSample />);
    expect(getByText("This is a sample text for testing.")).toBeInTheDocument();
  });
});
