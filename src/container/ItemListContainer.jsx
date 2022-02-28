

import React, { useEffect , useState } from 'react'
import '../Assets/styles/ItemList.css'
import ProductsCard from '../components/productos/ProductsCard';

const ItemListContainer = () => { 

  const url = 'https://run.mocky.io/v3/34e51a13-61a4-4f2f-9e74-c267a5ebda5c';


  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err));
    console.log('data')   
  
    
  }, [])
  
return (
 
    
      <div className="flex flex-row flex-wrap">
      <div className="grid gap-x-8 gap-y-4 grid-cols-3 ">
        
        {products.map(id=><ProductsCard  producto={id}/>)}

         </div>
      
      </div>

 )
}

export default ItemListContainer

/*<section>
      {
        products.length ? (
          
          products.map ( product => {
            return (
              
              <p >{product.img1}</p>
            )
            
          })
        )
        :<p>Cargando Productos ahora</p>
        
      }
      
      
    </section>*/