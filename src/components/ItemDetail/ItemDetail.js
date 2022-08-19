import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({detailItem}) => {
  
  const [datos, setDatos] = useState({});
  const [itemQuantity, setItemQuantity] = useState(0);
  
  useEffect(()=>{
    setDatos(detailItem);
  }, [detailItem]);
  
  const {nombre, precio, detalle, stock} = datos;

  return (
    <div className="itemDetail">
        <h3>{nombre}</h3>
        <p>Stock: {stock}</p>
        <p className='detalleProd'>{detalle}</p>
        <p className='detallePrecio'>Precio: ${precio}</p>
        {(itemQuantity > 0 ? <Link to='/cart'><button>Finalizar compra</button></Link> : <ItemCount dataProd={datos} itemQuantity={setItemQuantity}/>)}
    </div>
  )
}

export default ItemDetail