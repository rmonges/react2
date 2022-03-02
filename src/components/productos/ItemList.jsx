import React, { useEffect , useState } from 'react'

import '../../Assets/styles/ItemList.css'
import ProductsCard from '../productos/ProductsCard';

const ItemListContainer = () => { 

  const url = 'https://run.mocky.io/v3/b738a8d4-1ad7-494f-b22c-3ba5fc4e2bf2';


  const [products, setProducts] = useState([]);

  const getProducts =async ()=> {
     
    try {
      const resp  = await fetch(url);
      const data = await resp.json();
      setProducts(data);
    }catch(error) {
      console.log(error);
    }
  }

 useEffect(() => {
    
    setTimeout(getProducts, 2000)
    getProducts();
    getProducts(setProducts);
   //.then(resp => resp.json())
   //.then(data => setProducts(data))
   //.catch(err => console.log(err));
   //console.log('data')   
  
    
  }, [])
  
return (

    <section className="productoContainer">
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
    </section>  
 )
}



export default ItemListContainer

