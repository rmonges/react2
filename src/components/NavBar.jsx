import React from 'react'
import '../styles/Alignh1.css'
import CartWidget from '../components/CartWidget'
import LogoResto from  '../components/LogoResto'

const NavBar = () => {
  return (
    <div>
    <section className='Alignh1'>
    <h1>Vespa&RestoBar</h1><LogoResto/>   
    </section>
    <header class="header">     
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="Home.html">Lomos<span class="sr-only"></span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="Menu.html">Pizzas</a>
          </li>
         <li class="nav-item active">
            <a class="nav-link" href="Galeria.html">Galeria</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="Contacto.html">Contacto</a>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="Promociones.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Promociones</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="Promociones.html">Promo1</a>
              <a class="dropdown-item" href="Promociones.html">Promo2</a>
              <div class="dropdown-divider"></div>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="Menu.html"><CartWidget/></a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  </header>
    </div>
    
  )
}

export default NavBar
