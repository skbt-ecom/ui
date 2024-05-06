import * as Slider from "@radix-ui/react-slider";
import clsx from "clsx";
import styles from "./sliderCalculator.module.scss";

export interface ISlider extends Slider.SliderProps {
  min: number;
  max: number;
  rootClasses?: string;
  trackClasses?: string;
  rangeClasses?: string;
  thumbClasses?: string;
}

const SliderCalculator = ({
  asChild = false,
  defaultValue,
  value,
  onValueChange,
  onValueCommit,
  name,
  disabled = false,
  orientation = "horizontal",
  dir,
  inverted = false,
  min = 0,
  max = 1,
  step,
  minStepsBetweenThumbs,
  rootClasses,
  trackClasses,
  rangeClasses,
  thumbClasses,
}: ISlider) => (
  <Slider.Root
    className={clsx(styles.sliderRoot, rootClasses)}
    asChild={asChild}
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    onValueCommit={onValueCommit}
    name={name}
    disabled={disabled}
    orientation={orientation}
    dir={dir}
    inverted={inverted}
    min={min}
    max={max}
    step={step}
    minStepsBetweenThumbs={minStepsBetweenThumbs}
  >
    <Slider.Track className={clsx(styles.sliderTrack, trackClasses)}>
      <Slider.Range className={clsx(styles.sliderRange, rangeClasses)} />
    </Slider.Track>
    <Slider.Thumb className={clsx(styles.sliderThumb, thumbClasses)} aria-label="Volume" />
  </Slider.Root>
);

export { SliderCalculator };
