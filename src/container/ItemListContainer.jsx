import React from 'react'
import ItemList from'../components/productos/ItemList'
import '../container/productoContainer.css'

const ItemListContainer = () => {
  return (
    <div className="productoContainer">
      <h2 className="centerTitle">CATEGORIAS</h2>
       <ItemList/>
       
       </div>
  )
}

export default ItemListContainer



