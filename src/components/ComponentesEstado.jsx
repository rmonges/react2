import lomo from'../imagenes/vespas comidas/lomitos.jpg' 
import pizza from'../imagenes/vespas comidas/pizzafondo.jpg' 

import { useEffect , useState } from 'react'

const ComponentesEstado = () => {
    const [contador, setContador] = useState(1)

    const productos = [
      {id: '1', name: 'lomo', description:'', stock:'5', precio: '450', img: {lomo}},
      {id: '2', name: 'pizza', description:'', stock:'6', precio: '650', img:{pizza}},
      {id: '3', name: 'hamburguesa', description:'', stock:'7', precio: '550'},
    ]

    const nombres = ['lomitos', 'hamburguezas', 'pizzas']

   /* useEffect(() => {
      promesa()
       console.log('se ejecuto una vez');
       return () => {
         console.log('limpieza al amount');
       } 
    
    }, [])

    /*const promesa = () => {
      console.log(' incia promesa');

      const miPromesa= new Promise((resolve, reject) => {
        reject('la pomesa se rechazo')
      })
      miPromesa.then((res) => {
        console.log(res);
      }, (error) => {
        console.log (error)
      })
    }*/

     useEffect(() => {
       stockProducts()
       
       return () => {
         ;
       }
     },  )

    const stockProducts = () => {
      const stockProductsPromise= new Promise ((resolve, reject) => { 
        setTimeout(() => {
          resolve(productos)
        }, 3000);
      })

        stockProductsPromise.then(response => {
          console.log(response);
       })
      }

    const sumarHandler = () => {
      setContador( contador + 1)
        
  }
    const restarHandler = () => {
    setContador( contador - 1)
      
  }
  console.log('se ejecuta cada render');


  return (
  <>
    <div>ComponentesEstado</div>
    Total:{contador}
    <button onClick={sumarHandler}> + </button>
    <button onClick={restarHandler}> - </button>

    {nombres.map(( n, i) => <li key={i}><span>{n}</span></li>)}
    {productos.map (producto => <li key={producto.id}>{producto.name} - Precio:{producto.precio}</li>)}
  </>
  )
}


export default ComponentesEstado