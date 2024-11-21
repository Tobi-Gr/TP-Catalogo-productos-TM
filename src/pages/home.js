import React, { useEffect, useState } from 'react';
import { useProducts } from './../productsContext';
import CardProducto from '../components/CardProducto';

//NO PUEDE HACER UN LENGTH DE PRODUCTS DATA ¿?¿?¿?¿?
function MainScreen() { 
  const { productsData = [] } = useProducts() || {};
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      const totalProducts = productsData.length || 0;
      return newIndex > totalProducts ? 1 : newIndex < 1 ? totalProducts : newIndex;
    });
  }

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
      //hacer que agarre seis productos random para el carrousel
    if (productsData) { // Use optional chaining to avoid errors
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // Remove 'active' class from all dots
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      // Show the current slide and activate the current dot
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }, [slideIndex, productsData]);

  return (
    <main className="main">
      <h1 className='titulo'>Lorem's</h1>
      
     {productsData? (
        <div className="slideshow-container">
          {productsData.map((producto, index) => (
            <div className="mySlides fade" key={index} style={{ display: 'flex', alignContent:'center'}}>
              <img src={producto.images[0]} alt={producto.title} style={{ maxHeight: "40em", maxWidth: "40em"}} />
              <div className="text">{producto.title}</div>
            </div>
          ))}
          
          <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
          <a className="next" onClick={() => plusSlides(1)}>❯</a>
        </div>
      ) : (
        <p>Espera a que cargen los productos</p>
      )}
      
      <br />
      
      <div style={{ textAlign: 'center' }}>
        {productsData ? (
          productsData.map((_, index) => (
            <span
              className="dot"
              key={index}
              onClick={() => currentSlide(index + 1)}
            ></span>
          ))
        ) : null}
        
        <div className="contenedor-productos-home">
          {productsData ? (
            <div>
              {productsData.map((producto, index) => (
                <CardProducto key={index} producto={producto} />
              ))}
            </div>
          ) : (
            <p>Espera a que cargen los productos</p>
          )}
        </div>
      </div>
    </main>
  );  
}

export default MainScreen;
