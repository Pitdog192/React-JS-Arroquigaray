import React from 'react';
import { FaSteam } from "react-icons/fa";


const NavBar = () => {

  let listaNav = ["Lo más vendido", "Próximamente", "Ofertas", "Novedades"];

  return (
    <nav className="navBar">
      <FaSteam>
      <a href="https://developer.mozilla.org/"></a>
      </FaSteam>
      <h1 className="tituloNav">Venta de juegos digitales</h1>
      <div className='divMenu'>
        <ul className="menuNav">
          {listaNav.map((el, index) => (
            <li key={index}><a href='/'>{el}</a></li>
          ))}
        </ul>
      </div>  
    </nav>
  )
}

export default NavBar


