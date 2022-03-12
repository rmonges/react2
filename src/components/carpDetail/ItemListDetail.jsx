import React, { useState, useEffect} from 'react'
import '../../Assets/styles/ItemListDetail.css'
import ProductsCard from '../productos/ProductsCard';

const ItemListDetail = ({category}) => {

  const url = 'https://run.mocky.io/v3/3f70bc20-6420-44de-afa0-3532ea173a2b';  
    

        const [products, setProducts ] = useState([]);

        useEffect(() => {
           
            setTimeout( 2000);
            fetch(url)
            .then(response =>response.json())
            .then(data => {
              if (category) {
                setProducts (data.filter(p=> p.categoria === category))
            }else {
              setProducts (data)
            }
            })
           
        }, [category])
        
        

     
  return (
    <div className="productoContainer">
      {
         products.length ?

         (
           products.map ( producto => {
              return(
                <div key={producto.id}>
                  <ProductsCard producto={producto}/>
                </div>
              )
           })
           
           )
        : <p>cargando productos</p>
     }
   

       
       
    </div>
  )
}

export default ItemListDetail