import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()

    const Handleclick = () =>{
      navigate("/")
    }

  return (
    <div >
       <div className='w-50 mx-auto py-3'>
          <h1 className='text-danger'>404</h1>
        <p>This is not the page you are looking for.</p>
        <button onClick={Handleclick}>Go back</button>
       </div>
    </div>
  )
}

export default Notfound