import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>increment</button>
      <h1>hello i am component {count}</h1>
    </div>
  )
}

export default Counter
