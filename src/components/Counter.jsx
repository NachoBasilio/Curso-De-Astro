import { useState } from 'preact/hooks'

export default function Counter() {
    const [counter, setCounte] = useState(0)
  return (
    <>
       
        <button onClick={() => setCounte(counter + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounte(counter - 1)}>-</button>
    </>
  )
}
