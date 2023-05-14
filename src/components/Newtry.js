import React from 'react'

const Newtry = () => {
    const numbers = [1,2,3,4,5];
  return (
    <div>
        {numbers.map((number,i)=> (
            <p>{number}</p>
        ))}
    </div>
  )
}

export default Newtry