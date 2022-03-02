import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <section>
        <img src={producto.img} alt=""/>
        <h2>{producto.nombre}</h2>
        <h3>{producto.descripcion}</h3>
        <p>${producto.precio}</p>
    </section>
    )
}

export default ItemDetail
