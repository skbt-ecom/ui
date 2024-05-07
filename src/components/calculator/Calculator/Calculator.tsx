import { useForm } from "react-hook-form";
import { CalculatorSignatures } from "../CalculatorSignatures";
import type { ISlider } from "../SliderCalculator";
import { SliderCalculator } from "../SliderCalculator";
import { CalculatorInput } from "../CalculatorInput";

type WithoutDefaultSlider = Omit<ISlider, "defaultValue">;

interface ICalculator extends WithoutDefaultSlider {
  defaultValue: undefined;
}

export const Calculator = ({ min, max, defaultValue }: ICalculator) => {
  const { control, register, formState } = useForm({
    defaultValues: {
      amountCredit: defaultValue,
    },
  });

  const { errors } = formState;

  return (
    <>
      <CalculatorInput
        {...register("amountCredit")}
        error={errors.amountCredit?.message}
        control={control}
      />
      <SliderCalculator defaultValue={defaultValue} min={min} max={max} />
      <CalculatorSignatures min={min} max={max} />
    </>
  );
};
