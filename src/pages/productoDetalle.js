import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from './../productsContext';
import FotosProducto from '../components/ImagenesProducto';

function ProductoDetalleScreen() {
  const {productsData = [], anadirAlCarrito } = useProducts() || {};

  const [producto, setProducto] = useState();
  const { id } = useParams();

  useEffect(() => {
    console.log("ID del producto:", id);
    const productoEncontrado = productsData.find(p => p.id === parseInt(id, 10));
    setProducto(productoEncontrado);
  }, [productsData, id]);


  return (
    <main className="main">
      {!producto ? ( 
        <h1 className='titulo'>Cargando...</h1> 
      ) : (
        <div className='contenedor-detalleProducto'>
          <FotosProducto {...producto} src={producto.images[0]}/>
          <div className='contenedor-textoProducto'>
            <h1 className='titulo'>{producto.title}</h1>
            <h3 className='descripción'>{producto.description}</h3>
            <h3>${producto.price}</h3>
            <button className='btn-anadirCarro' onClick={() => anadirAlCarrito(producto)}>Añadir al carrito</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductoDetalleScreen;
