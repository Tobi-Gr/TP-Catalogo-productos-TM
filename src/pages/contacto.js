import React from 'react';

function ContactoScreen() {
  return (
    <div className='contacto'>
      <div className="form-container">
        <h1 className='title'>Contacto</h1>
        <p className="message">Dejá tus datos y sigamos en contacto ;D</p>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactoScreen;
