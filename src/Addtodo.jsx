import React,{useState} from 'react'
import Input from './props/Input'
import Button from './props/Button'
import Displtodo from './Displtodo'

const Addtodo = () => {
    const [title, settitle] = useState("")
    const [todoaray, settodoaray] = useState([])
    const handleclick = () =>{
           settodoaray([...todoaray, title])
    }
  return (
    <div>
        Addtodo
        <Input placeholder="Title" onchange={(e)=> settitle(e.target.value)}/>
        <Button text="Add todo" onclick={handleclick}/>
        <Displtodo todoarray={todoaray}/>
    </div>
  )
}

export default Addtodo