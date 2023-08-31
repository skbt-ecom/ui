import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestComponent } from "./TestComponent";

describe("test Component", () => {
  it("user event", async () => {
    expect.hasAssertions();
    render(<TestComponent />);

    await userEvent.type(screen.getByTestId("input"), "123");
    expect(screen.getByTestId("output")).toContainHTML("123-");

    await userEvent.click(screen.getByTestId("btn"));
    expect(screen.getByTestId("btn")).toContainHTML("Clicked");

    await userEvent.click(screen.getByTestId("btn"));
    expect(screen.getByTestId("btn")).toContainHTML("Click me");
  });

  it("fire event", () => {
    expect.hasAssertions();
    render(<TestComponent />);
    fireEvent.click(screen.getByTestId("btn"));
    expect(screen.getByTestId("btn")).toContainHTML("Clicked");
  });

  it("snapshot", () => {
    expect.hasAssertions();
    const snap = render(<TestComponent />);
    expect(snap).toMatchSnapshot();
  });
});
