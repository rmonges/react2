import React from 'react'
import '../../Assets/styles/ItemListDetail.css'
import ProductsCardId from './ProductsCard'

export const ItemDetail = ({producto}) => {
  return ( 
    <div className="productoContainer">
      <section  >
        <ProductsCardId producto={producto} />
    </section>
    </div>
    )
}

export default ItemDetail
