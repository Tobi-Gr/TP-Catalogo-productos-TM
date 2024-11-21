import React, { createContext, useContext, useEffect, useState } from 'react';
import {getCarrito, saveCarrito} from './storage';
import axios from 'axios';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState(null);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // traer productos
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
                
                // traer carritos
                const nuevoCarrito = await getCarrito();
                setCarrito(Array.isArray(nuevoCarrito) ? nuevoCarrito : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        fetchData();
    }, []); 
    
    const actualizarCarrito = (nuevoCarrito) => {
        setCarrito(nuevoCarrito);
        saveCarrito(nuevoCarrito);
    };

    const anadirAlCarrito = (product) => {
        setCarrito((prevCarrito) => {
            const indexProductoExistente = prevCarrito.findIndex((item) => item.id === product.id);
            let carritoActualizado;
            if (indexProductoExistente !== -1) { // Ya tiene el producto, se agrega cantidad
                carritoActualizado = [...prevCarrito];
                carritoActualizado[indexProductoExistente].quantity += 1;
            } else {
                carritoActualizado = [...prevCarrito, { ...product, quantity: 1 }]; // Se agrega el producto con cantidad 1
            }
            actualizarCarrito(carritoActualizado);
            return carritoActualizado;
        });
    };

    const sacarDeCarrito = (productId) => {
        setCarrito((prevCarrito) => {
            const carritoActualizado = prevCarrito.filter((item) => item.id !== productId);
            actualizarCarrito(carritoActualizado);
            return carritoActualizado;
        });
    };
    
    const actualizarCantEnCarrito = (productId, cantidad) => {
        setCarrito((prevCarrito) => {
            const carritoActualizado = prevCarrito.map((item) =>
                item.id === productId ? { ...item, quantity: cantidad } : item
            );
            actualizarCarrito(carritoActualizado);
            return carritoActualizado;
        });
    };

    const calcularTotal = () => {
        const total = carrito.reduce((total, item) => total + item.price * item.quantity, 0);
        return parseFloat(total.toFixed(2));
    };

    const calcularCantProductos = () => {      
        let cantProductos = 0;
        carrito.forEach(producto => {
          cantProductos += producto.quantity;
        });
        return cantProductos;
      };
    

    return (
        <ProductsContext.Provider
            value={{
                productsData: products,
                carrito: carrito,
                anadirAlCarrito: anadirAlCarrito,
                sacarDeCarrito: sacarDeCarrito,
                actualizarCantEnCarrito: actualizarCantEnCarrito,
                calcularTotal: calcularTotal,
                calcularCantProductos: calcularCantProductos
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductsContext);
};
