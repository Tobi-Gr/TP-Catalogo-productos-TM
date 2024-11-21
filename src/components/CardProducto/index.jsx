import { Link } from "react-router-dom";


const CardProducto = ({ producto }) => {

  return (
    <Link to={'/detalle/' + producto.id} className="link-no-decor">
      <img 
        className="imgCard" 
        src={producto.images[0]} 
        alt={producto.nombre}
      />
      <div className='textoCard'>
        <h2>{producto.title}</h2>
        <h4>${producto.price}</h4>
      </div>
    </Link>
  );
};

export default CardProducto;