import { useState } from 'react'
import Button from '../components/Button'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  )
}