import React from 'react'

const Input = ({onchange,placeholder}) => {
  return (
    <div>
        <input type="text" onChange={onchange} placeholder={placeholder} />
    </div>
  )
}

export default Input