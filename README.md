# next-persist-state

> Localstorage for next js

[![NPM](https://img.shields.io/npm/v/next-persist-state.svg)](https://www.npmjs.com/package/next-persist-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save next-persist-state
```

## Usage

```jsx
import React from "react";
import usePersistState from "next-persist-state";

const App = () => {
  /** add unique key so that specific state value can be retrieved */
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
```

## License

MIT © [khantwaikyaw](https://github.com/khantwaikyaw)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
