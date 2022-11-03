import React from 'react'
import './ItemsListContainer.css'

const ItemsListContainer = (props) => {
  console.log(props)
    return (
    <div className='mensaje'>
    <h2 className='mensaje-saludo'>{props.name}</h2>
    </div>
  )
}

export default ItemsListContainer