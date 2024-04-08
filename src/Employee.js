import React from 'react'

function Employee(props) {
    let {name,age,backgroundColor} = props
  return (
    <div>
      <h1 style={{backgroundColor}}>Name : {name}, age:{age} </h1>
    </div>
  )
}

export default Employee
