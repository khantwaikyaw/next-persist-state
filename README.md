# next-persist-state

> Localstorage for next js

[![NPM](https://img.shields.io/npm/v/next-persist-state.svg)](https://www.npmjs.com/package/next-persist-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save next-persist-state
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'next-persist-state'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [khantwaikyaw](https://github.com/khantwaikyaw)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
