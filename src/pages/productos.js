import React, { useEffect, useState } from 'react';
import CardProducto from '../components/CardProducto';
import Search from '../components/Search';
import { useProducts } from './../productsContext';

function ProductosScreen() {
  const { productsData = [] } = useProducts() || {};
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterParam, setFilterParam] = useState("All");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.products);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    if (productsData) {
      setProductosFiltrados(productsData);
    }
  }, [productsData]);

  useEffect(() => {
    let results = productsData;

    if (filterParam !== "All") {
      results = results.filter(producto => producto.category === filterParam);
    }

    setProductosFiltrados(results || []); // Asegurarse de que sea un array
  }, [filterParam, productsData]);

  const handleSearch = (search) => {
    if (search) {
      const results = productsData.filter((producto) => 
        producto.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductosFiltrados(results || []); // Asegurarse de que sea un array
    } else {
      setProductosFiltrados(productsData || []); // Restablece a todos los productos si no hay búsqueda
    }
  };

  return (
    <main className="main">
      <h1 className='titulo'>Productos</h1>
      <div className='busqueda-container'>
        <Search onSearch={handleSearch} />
        <select
          onChange={(e) => setFilterParam(e.target.value)}
          className="custom-select"
          aria-label="Filtrar por categoría"
        >
          <option value="All">Todas las categorías</option>
          <option value="beauty">Belleza</option>
          <option value="fragrances">Fragancias</option>
          <option value="furniture">Muebles</option>
          <option value="groceries">Alimentos</option>
        </select>
      </div>
      <div className='productosContainer'>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto, index) => (
            <CardProducto key={index} producto={producto} />
          ))
        ) : (
          <p>No hay resultados para tu búsqueda</p>
        )}
      </div>
    </main>
  );
}

export default ProductosScreen;
