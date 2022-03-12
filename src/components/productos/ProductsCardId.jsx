import React from 'react'
import '../../Assets/styles/Products.Card.css'
import {Link} from 'react-router-dom'


const ProductsCardId = ({producto}) => {
  return (
    <div>
    <div className="item-shop col-12 col-md-10 mb-3 three-columns__conteiner ">
        <div className="item-card">
            <img className="item-card-img-top" src={`${process.env.PUBLIC_URL}/imagenes/${producto.img}`} alt={producto.nombre} width="170px" height="170px"/>
            <div className="item-card-body">
              <h5 className="item-card-title">{producto.nombre}</h5>
              
              <p className="item-card-text"><Link to={`/categoria/${producto.categoria}`}>{producto.categoria}</Link></p>
              <p><Link to={`/item/${producto.id}`}>{producto.id}</Link></p>
              <button className="item-btn btn-dark btncomp" type="button">
                  Comprar
              </button>
            </div>
          </div>
    </div>
  </div>
    
  
  )
}

export default ProductsCardId
