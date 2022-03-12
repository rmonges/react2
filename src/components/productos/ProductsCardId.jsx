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
              <h5 className="item-card-title">FAREPT</h5>
              
              <p className="item-card-text"><Link to={`/categoria/${producto.categoria}`}>{producto.categoria}</Link></p>
              <p><Link to={`/item/${producto.id}`}>{producto.id}</Link></p>
              <button className="item-btn btn-dark btncomp" type="button">
                  Comprar
              </button>
            </div>
          </div>
    </div>
  </div>
    
  /* <div className='container mx-auto mt-5 text-center '>
     <div className='flex '>

    <div className="  bg-white w-72 h-96 shadow-md rounded m-3">
      <div className="h-3/4 w-full">
        <img className="w-full h-full object-cover rounded-t" src={`${process.env.PUBLIC_URL}/imagenes/${producto.img}`} alt={producto.nombre} width="170px" height="170px"/>
      </div>
      <div className ="borderContainer"><Link to={`/item/${producto.id}`}>{producto.id}</Link>
      <div className="w-full h-1/4 p-3">
        <div className=" hover:text-yellow-600 text-gray-700">
          <span className="text-lg font-semibold uppercase tracking-wide "><Link to={`/categoria/${producto.categoria}`}>{producto.categoria}</Link></span>
      </div>
       
      </div>

    </div>  
    </div>
    </div>
        
      
    </div>*/
  )
}

export default ProductsCardId
