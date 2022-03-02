import React from 'react'
import  './footer.css'
import LogoResto from '../../components/LogoResto'

const Footer = () => {
  return (
    <div>
        <footer>
      <section className="footer__top">
         <div className="footer__div">
              <span className="span">#Seguinos en nuestras redes</span>             
              <img1 src="imagenes/vespas comidas/logo redes.png" alt="logo redes" width="65" height="45"/>
          </div> 
      </section> 
        <footer>   
      <section className="footer__bottom">    
          <div className="article__titulo">
              <em>Vespa Resto&amp;Bar</em>          
              <img src="" alt=""/>       
              <span> TEL:3515786547</span>
              <span>Ubicacion: Tissera 702,</span>
              <span>Mendiolaza Córdoba</span>
          </div>
          <div className="alinear__logo">
            <LogoResto/>        
          <div>
          <p className="alinear">Creado por Vespa Resto&amp;Bar-2021-Derechos reservados</p>
          </div>
      </div></section>    
    </footer>
      

</footer>
        
        </div>
  )
}

export default Footer