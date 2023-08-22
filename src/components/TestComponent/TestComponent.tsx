import { useState } from "react";

export const TestComponent = () => {
  const [state, setState] = useState<string>("");
  const [clicked, setClicked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div>
      <input data-testid="input" type="text" value={state} onChange={onChange} />
      <h2 data-testid="output">{state + (state.length > 5 ? "+" : "-")}</h2>
      <button type="button" onClick={() => setClicked(!clicked)} data-testid="btn">
        {clicked ? "Clicked" : "Click Me"}
      </button>
    </div>
  );
};
