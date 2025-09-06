import React from 'react'

const Card = ({name, image}) => {
  return (
    <div style={{border : '1px solid gray', borderRadius : '8px', width: 'min-content', padding : '16px', margin: '16px', marginBottom : '0px'}}>
        <img src={image} width={175} height={100}  />
        <h3 style={{margin: '0px'}}>{name}</h3>
    </div>
  )
}

export default Card