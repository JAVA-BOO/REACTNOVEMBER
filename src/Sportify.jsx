import React from 'react'
import Card from './props/Card'
import hero from "./assets/hero.png"
import { musicArray } from './Variable'

const Sportify = () => {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/>
        <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/>
        <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/>
        <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/> */}
        { musicArray.map((music, i)=>{
            return (
                <div key={music.id}>
                  <Card title={music.title} artist={music.artist} image={music.image}/>
                </div>
            )
        })

        }
    </div>
  )
}

export default Sportify
