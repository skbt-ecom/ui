import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestComponent } from "./TestComponent";

describe("Test Component", () => {
  test("user event", async () => {
    render(<TestComponent />);

    await userEvent.type(screen.getByTestId("input"), "123");
    expect(screen.getByTestId("output")).toContainHTML("123-");

    await userEvent.click(screen.getByTestId("btn"));
    expect(screen.getByTestId("btn")).toContainHTML("Clicked");

    await userEvent.click(screen.getByTestId("btn"));
    expect(screen.getByTestId("btn")).toContainHTML("Click me");
  });

  test("fire event", () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByTestId("btn"));
    expect(screen.getByTestId("btn")).toContainHTML("Clicked");
  });

  test("snapshot", () => {
    const snap = render(<TestComponent />);
    expect(snap).toMatchSnapshot();
  });
});
