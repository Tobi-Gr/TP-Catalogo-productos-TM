import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CardCarrito from '../CardCarrito';
import { useProducts } from './../../productsContext';

const Modal = ({ isOpen, onClose }) => {
  const { carrito, calcularTotal } = useProducts();
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    setTotal(calcularTotal());
  }, [carrito, calcularTotal]);
  
  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Carrito</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        {carrito.map((producto) => (
            <CardCarrito producto={producto} />
          ))}
        <h3><b>Total:</b> ${total}</h3>
        <button className='boton-mas-info' onClick={()=> console.log("a")}><b><Link to="/carrito" className='link-no-decor'>Más info</Link></b></button>
      </div>
    </div>
  );
};

export default Modal;
