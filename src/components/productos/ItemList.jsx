import React, { useEffect , useState } from 'react'
import '../../Assets/styles/ItemList.css'
import ProductsCard from '../productos/ProductsCard';

const ItemList = () => { 

  const url = 'https://run.mocky.io/v3/3f70bc20-6420-44de-afa0-3532ea173a2b';


  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    
    setTimeout(getProducts, 2000)
    getProducts();
    getProducts(setProducts);
   
  
    
  }, [])

  const getProducts =async ()=> {
     
    try {
      const resp  = await fetch(url);
      const data = await resp.json();
      
      setProducts(data);
      
    }catch(error) {
      console.log(error);
    }
  }


  
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



export default ItemList

