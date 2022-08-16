import React from "react";
import usePersistState from "next-persist-state";

const App = () => {
  const [value, setValue, clearValue] = usePersistState(
    "SAMPLE_KEY",
    "Hello World!"
  );

  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => setValue("New Value")}>set value</button>
        <button onClick={() => clearValue()}>clear value</button>
      </div>
    </div>
  );
};

export default App;
