'use client'
import { useState } from 'react'

const Client = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>Client Page</h1>
      <p className='text-2xl pb-4'>Count: {count}</p>
      <button className='btn btn-primary' onClick={() => setCount(e => e + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Client
