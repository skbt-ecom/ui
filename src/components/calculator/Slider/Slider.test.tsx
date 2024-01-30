import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "@mui/material/Slider";

import type { ITestSlider } from "./types";

const mockedBoundingClientRect: ITestSlider = {
  left: 19.572917938232422,
  width: 563.5208740234375,
  toJSON: () => {},
  height: 0,
  x: 0,
  y: 0,
  bottom: 0,
  right: 0,
  top: 0,
};

jest
  .spyOn(HTMLElement.prototype, "getBoundingClientRect")
  .mockImplementation(() => mockedBoundingClientRect);

describe("slider Component", () => {
  it("updates value when slider thumb is moved", () => {
    expect.hasAssertions();
    render(<Slider defaultValue={5} min={0} max={10} />);
    const slider = screen.getByRole("slider");

    fireEvent.mouseDown(slider, { clientX: 200 });
    fireEvent.mouseMove(slider, { clientX: 200 });
    fireEvent.mouseUp(slider);

    expect(slider).toHaveAttribute("aria-valuenow", "3");
    expect(slider).toMatchSnapshot();
  });
});
