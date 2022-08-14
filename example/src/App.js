import React from 'react'
import { useMyHook } from 'next-persist-state'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App