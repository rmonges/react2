

import React, { useEffect , useState } from 'react'
import './productoContainer.css'
import '../Assets/styles/ItemList.css'
import ProductsCard from '../components/productos/ProductsCard';

const ItemListContainer = () => { 

  const url = 'https://run.mocky.io/v3/b738a8d4-1ad7-494f-b22c-3ba5fc4e2bf2';


  const [products, setProducts] = useState([]);

 /* const getProducts = async () => {
    
    try {
      const resp = await fetch(url);//esperamos a que se cumpla la promesa
      const data = await resp.json();//esperamos a que se parse la respuesta
      setProducts(data);//seteamos nuestro state de productos
  } catch (error) {
      console.log(error);
  }*/
  

  

  useEffect(() => {
    
    fetch(url)
    //getProducts();
   .then(resp => resp.json())
   .then(data => setProducts(data))
   .catch(err => console.log(err));
   console.log('data')   
  
    
  }, [])
  
return (

    <section className="productoContainer">
     {
         products.length ?

         (
           products.map ( producto => {
              return(
                
               <ProductsCard producto={producto}/>
              )
           })
           
           )
        : <p>cargando productos</p>
     }
    </section>  
 )
}



export default ItemListContainer

/* {products.map(product =><div key={product.id}>
          
       <ProductsCard  producto={product}/></div>)}
    </section>*/