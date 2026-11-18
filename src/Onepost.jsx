import axios from 'axios'
import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const Onepost = () => {
    const {id} = useParams()
    console.log(id);
    const [post, setpost] = useState({})

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res)=>{
        console.log(res);
        setpost(res.data)
      }).catch((err)=>{
        console.log(err);
        setpost({}) // Set to empty object in case of error
      })
    }, [])
    


  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default Onepost