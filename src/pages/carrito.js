import React from 'react';
import { Link } from "react-router-dom";
import { useProducts } from '../productsContext';
import PastillaCantidad from '../components/PastillaCantidad';

function CarritoScreen() {
    const { carrito, calcularTotal, sacarDeCarrito } = useProducts();

    return (
        <main className="main">
            <div className='carritoScreen-container'>
                <table className='tabla-carrito'>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                    {
                        carrito.map((producto)=>(
                        <tr>
                            <td>
                                <Link to={'/detalle/' + producto.id} className='link-no-decor'>
                                    <img className="thumbnail-carrito" alt='imagen del producto' src={producto.thumbnail}/>
                                    <b>{producto.title}</b>
                                </Link>
                            </td>
                            <td>${producto.price}</td>
                            <td><PastillaCantidad producto={producto} color="blanca"/></td>
                            <td>${producto.price * producto.quantity}</td>
                            <td onClick={()=> sacarDeCarrito(producto.id)} className='delete-product-btn'>X</td>
                        </tr>
                        ))
                    }
                </table>
                <h3 className='total-carrito'>Total: ${calcularTotal()}</h3>
            </div>
        </main>
    );
}

export default CarritoScreen;
