import React from 'react';
import { useProducts } from './../../productsContext';

const PastillaCantidad = ({ producto, color = 'celeste' }) => { // Usamos 'celeste' como valor por defecto
    const { actualizarCantEnCarrito, sacarDeCarrito } = useProducts();
    
    function handleMenos() {
        if (producto.quantity > 1) {
            actualizarCantEnCarrito(producto.id, producto.quantity - 1);
        } else {
            sacarDeCarrito(producto.id);
        }
    }
  
    return (
        <main className={`pastilla-container ${color}`}>
            <button className="pastilla-menos" onClick={handleMenos}>-</button>
            <h3 className="pastilla-cantidad" key={'cardCarrito-'+producto.id}>{producto.quantity}</h3>
            <button className="pastilla-mas" onClick={() => actualizarCantEnCarrito(producto.id, producto.quantity+1)}>+</button>
        </main>
    );
};

export default PastillaCantidad;
