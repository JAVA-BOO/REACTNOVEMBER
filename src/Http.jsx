import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Http = () => {
    const [alldata, setalldata] = useState([])
    const [haschange, sethaschange] = useState(false)
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((res)=> res.json())
    // .then((data)=> console.log(data) )

    const Update =()=>{
       sethaschange(!haschange)
    }
     useEffect(() => {

    //  alert("Welcome To my website")
      axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data);
        setalldata(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
    }, [])

   
   
  return (
    <div>
        <h1>This is Http request class</h1>
        <button onClick={Update}>click</button>
        {
            alldata.map((data)=>(
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                    <Link to={`/one/${data.id}`}>see more</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Http