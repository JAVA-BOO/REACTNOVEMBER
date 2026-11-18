import React, { useState } from 'react'

const Card = ({title,image,artist}) => {
    // console.log(props);
    const [hover, setHover] = useState(false)

    const cardStyle = {
        width: '200px',
        padding: '16px',
        backgroundColor: hover ? '#282828' : '#181818',
        borderRadius: '8px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    }

    const imageBoxStyle = {
        position: 'relative',
        marginBottom: '16px',
    }

    const imageStyle = {
        width: '100%',
        aspectRatio: '1 / 1',
        objectFit: 'cover',
        borderRadius: '6px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
        display: 'block',
    }

    const playButtonStyle = {
        position: 'absolute',
        right: '8px',
        bottom: hover ? '8px' : '0px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#1DB954',
        color: '#000',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 8px rgba(0, 0, 0, 0.3)',
        opacity: hover ? 1 : 0,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    }

    const titleStyle = {
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '0 0 8px 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }

    const contentStyle = {
        color: '#b3b3b3',
        fontSize: '14px',
        margin: 0,
        lineHeight: '1.4',
    }

  return (
    <div
        style={cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <div style={imageBoxStyle}>
            <img src={image} alt={title} style={imageStyle} />
            <button style={playButtonStyle}>▶</button>
        </div>
        <h3 style={titleStyle}>{title}</h3>
         <p style={contentStyle}>{artist}</p>
    </div>
  )
}

export default Card
