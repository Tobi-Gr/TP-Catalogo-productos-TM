import React from 'react';
import PastillaCantidad from '../PastillaCantidad';

const CardCarrito = ({ producto }) => {
  return (
    <div className="card-carrito-container">
        <img className="thumbnail-carrito" alt='imagen del producto' src={producto.thumbnail}/>
        <div className='informacion-card-carrito'>
          <h3>{producto.title}</h3>
          <div className='cant-precio-card-carrito'>
            <PastillaCantidad producto={producto}/>
            <h4>${producto.price}</h4>
          </div>
        </div>
    </div>
  );
};

export default CardCarrito;
