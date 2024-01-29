import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("input Component", () => {
  it("renders input", () => {
    expect.hasAssertions();
    render(<Input defaultValue={5} min={0} max={10} />);

    const input = screen.getByTestId("TextFieldTestId");
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  it("entering a value within the allowed range", () => {
    expect.hasAssertions();
    render(<Input defaultValue={5} min={0} max={10} />);
    const inputField = screen.getByTestId("TextFieldTestId") as HTMLInputElement;

    fireEvent.change(inputField, { target: { value: "5" } });
    expect(inputField.value).toBe("5");
  });

  it("entering a value greater than within the permitted range", () => {
    expect.hasAssertions();
    render(<Input defaultValue={5} min={0} max={10} />);
    const inputField = screen.getByTestId("TextFieldTestId") as HTMLInputElement;

    fireEvent.change(inputField, { target: { value: "45" } });
    fireEvent.blur(inputField);
    expect(inputField.value).toBe("10");
  });

  it("entering a value less than within the allowed range", () => {
    expect.hasAssertions();
    render(<Input defaultValue={5} min={0} max={10} />);
    const inputField = screen.getByTestId("TextFieldTestId") as HTMLInputElement;

    fireEvent.change(inputField, { target: { value: "-45" } });
    fireEvent.blur(inputField);
    expect(inputField.value).toBe("0");
  });

  it("entering non-digits", () => {
    expect.hasAssertions();
    render(<Input defaultValue={5} min={0} max={10} />);
    const inputField = screen.getByTestId("TextFieldTestId") as HTMLInputElement;

    fireEvent.change(inputField, { target: { value: "Value" } });
    fireEvent.blur(inputField);
    expect(inputField.value).toBe("0");
  });
});
