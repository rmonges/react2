import React from 'react'
import '../styles/ItemList.css'

const ItemListContainer = (props) => { 
    let styles = {
        borderColor: 'grey'
    };
  return (
    <div styles={styles}>
      <p className="mensbienv">Bienvenidos a VespaResto&Bar!</p>
    </div>
  )
}

export default ItemListContainer
