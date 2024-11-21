import React, { useState } from 'react';

const FotosProducto = (producto) => {
    const [selectedImage, setSelectedImage] = useState(producto.images[0]);


  return (
    <div className="detalleProducto">
      <div className="fotoGrande">
        <img src={selectedImage} alt="Imagen del producto" />
      </div>
      <div className="contenedorThumbnail">
        {producto.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onMouseEnter={() => setSelectedImage(image)}
            className="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default FotosProducto;
