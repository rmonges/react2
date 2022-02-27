

import React, { useEffect , useState } from 'react'
import '../Assets/styles/ItemList.css'
import ProductsCard from '../components/productos/ProductsCard';

const ItemListContainer = () => { 

  const url = 'https://run.mocky.io/v3/10ed0131-93f1-4caa-859a-2dcc5d8c10b3';


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