import React from 'react'
import '../../Assets/styles/Products.Card.css'

const ProductsCard = ({producto}) => {
  return (
    <div>
    
   <div className='container mx-auto mt-5 text-center '>
     <div className='flex '>

    <div className="  bg-white w-72 h-96 shadow-md rounded m-3">
      <div className="h-3/4 w-full">
        <img className="w-full h-full object-cover rounded-t" src={producto.img} alt={producto.nombre}/>
      </div>
      <div className="w-full h-1/4 p-3">
        <a href="htm" className=" hover:text-yellow-600 text-gray-700">
          <span className="text-lg font-semibold uppercase tracking-wide ">{producto.precio}</span>
        </a>
        <p className="text-gray-600 text-sm leading-5 mt-1">{producto.descripcion}</p> 
      </div>

    </div>  
    </div>
    </div>
        
      
    </div>
  )
}

export default ProductsCard

