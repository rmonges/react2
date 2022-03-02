import React from 'react'
import ItemList from'../components/productos/ItemList'
import '../container/productoContainer.css'

const ItemListContainer = () => {
  return (
    <div className="productoConteiner">
      <h2 className="centerTitle">Nuestros Productos</h2>
       <ItemList/>
    </div>
  )
}

export default ItemListContainer



