import React from 'react'
import { useParams } from 'react-router-dom'

import '../../container/productoContainer.css'
import ItemDetail2 from './ItemDetail2'
import ItemListDetail from './ItemListDetail'

const ItemDetailContainer = () => {
const {id} = useParams()
const {category} = useParams()

console.log(category);

  return (
    <>    <h2 className="centerTitle">CATEGORIAS</h2>
    <div className="productoContainer">
      
       <ItemListDetail category={category}/>
       <ItemDetail2 item= {id}/>
    </div>
    </>

  )
}

export default ItemDetailContainer
