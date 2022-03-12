import NavBar from './layout/NavBar/NavBar.jsx'
//import ItemListContainer from './container/ItemListContainer'
import Footer from './layout/footer/Footer'
import ItemDetailContainer from './components/carpDetail/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/carpDetail/Home'
import ItemDetail2 from './components/carpDetail/ItemDetail2'
import ItemListContainer from './container/ItemListContainer'
import ItemListDetail from './components/carpDetail/ItemListDetail'



const App = () => {
   return (
    <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
   <Route index element= {<Home/>}></Route>
      <Route path='/' element= {<ItemListContainer/>}></Route> 
      <Route path='Item' >
      <Route path=':id' element= {<ItemDetail2/>}></Route>
        </Route>
      <Route path='categoria' element= {<ItemDetailContainer/>}>
       <Route path=':category' element= {<ItemListDetail/>}>
       </Route>
       </Route>
   </Routes>
   <Footer/>
 </BrowserRouter>
  
  </>  

  )
}

export default App
