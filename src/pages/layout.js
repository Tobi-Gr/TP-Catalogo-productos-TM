import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Modal from './../components/ModalCarrito';
import logo from './../assets/logo.png';
import carrito from './../assets/carrito.png'
import { useProducts } from './../productsContext';

const Layout = () => {
  const { calcularCantProductos } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      <nav>
        <ul>
          <li>            
            <Link to="/">
                <img src={logo} alt="Logo" className="logo-nav"/>
            </Link>
          </li>
          <li>
            <h1 className="nombre-nav">Lorem's</h1>
          </li>
          <li>
            <Link to="/productos" className="item-nav">Productos</Link>
          </li>
          <li>
            <Link to="/contacto" className="item-nav">Contacto</Link>
          </li>
          <li className="carrito-item">
            <div className="carrito-contenedor">
              <p>{calcularCantProductos()}</p>
              <img src={carrito} alt="Carrito" className="carrito-nav" onClick={toggleModal}/>
            </div>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isModalOpen} onClose={toggleModal}/>
      <Outlet />
    </>
  )
};

export default Layout;