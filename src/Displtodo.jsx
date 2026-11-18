import React from 'react'

const Displtodo = ({todoarray}) => {
  return (
    <div>
        Displtodo
        {todoarray && todoarray.map((todo)=>(
            <div>
                <h1>{todo}</h1>
            </div>
        ))}
    </div>
  )
}

export default Displtodo