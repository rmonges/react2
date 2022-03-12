import React, { useEffect, useState } from 'react'
import ItemDetail from '../productos/ItemDetail';

import ProductsCard from '../productos/ProductsCard';


const ItemDetail2 = ({id}) => {
  const url = 'https://run.mocky.io/v3/3f70bc20-6420-44de-afa0-3532ea173a2b';  
   
const [products, setProducts ] = useState([]);

    

 useEffect(() => {
   fetch(url)
   .then(response => response.json())
   .then(data => {
     if (id){
      setProducts (data.find(i => i.id === id))
      console.log(data.id)
     }else {
       setProducts (data)
       console.log(data)
     }
   })
  
 },[id]
 
 )
 
    return (
        
      <div className="productoContainer">
      {
         products?
           <ItemDetail producto={products}/>
          
                  
        : <p>cargando productos</p>
     }


       
       
    </div>
  )
}

export default ItemDetail2
