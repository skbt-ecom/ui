import { useState } from "react";
import { sum } from "@src/utils/sum";

type Props = {
  onClick?: () => void;
};

export const TestComponent = ({ onClick }: Props) => {
  const [state, setState] = useState<string>("");
  const [clicked, setClicked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  sum(1, 4);

  return (
    <div>
      <input data-testid="input" type="text" value={state} onChange={onChange} />
      <h2 data-testid="output">{state + (state.length > 5 ? "+" : "-")}</h2>
      <button
        type="button"
        onClick={() => {
          setClicked(!clicked);
          onClick?.();
        }}
        data-testid="btn"
      >
        {clicked ? "Clicked" : "Click me"}
      </button>
    </div>
  );
};
