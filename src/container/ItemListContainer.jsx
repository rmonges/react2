

import React, { useEffect , useState } from 'react'
import '../Assets/styles/ItemList.css'
import ProductsCard from '../components/productos/ProductsCard';

const ItemListContainer = () => { 

  const url = 'https://run.mocky.io/v3/b738a8d4-1ad7-494f-b22c-3ba5fc4e2bf2';


  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err));
    console.log('data')   
  
    
  }, [])
  
return (
 
    <>
      {products.map(img=><div key={img.id}>
          
       <ProductsCard  producto={img}/></div>)}
    </>
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