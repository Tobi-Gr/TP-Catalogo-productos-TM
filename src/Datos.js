import batduck from './assets/patos/batduck.jpg';
import batduck2 from './assets/patos/batduck2.jpg';
import batduck3 from './assets/patos/batduck3.jpg';
import clasico from './assets/patos/clasico.jpg';
import clasico2 from './assets/patos/clasico2.jpg';
import clasico3 from './assets/patos/clasico3.jpg';
import freddy from './assets/patos/freddy.jpg';
import freddy2 from './assets/patos/freddy2.jpg';
import freddy3 from './assets/patos/freddy3.jpg';
import libertad from './assets/patos/libertad.jpg';
import libertad2 from './assets/patos/libertad2.jpg';
import libertad3 from './assets/patos/libertad2.jpg';
import potter from './assets/patos/potter.jpg';
import potter2 from './assets/patos/potter2.jpg';
import potter3 from './assets/patos/potter3.jpg';
import spider from './assets/patos/spiderduck.jpg';
import spider2 from './assets/patos/spiderduck2.jpg';
import spider3 from './assets/patos/spiderduck3.jpg';

function Productos() {
    return [
        { 'id': '0', 
            'nombre':'BatDuck', 
            'descripcion': 'El misterioso heroe de The ducking shop. Él solo aparece a la noche para salvar a patos en apuros, asustando a todos los villanos.',
            'categoria': 'Personajes',
            'foto1': batduck,
            'foto2': batduck2,
            'foto3': batduck3,
            'precio': '$100'
        },
        { 'id': '1', 
            'nombre':'Amarillo clasico', 
            'descripcion': 'El pato amarillo original que empezó todo. Puro y simple, nunca pasa de moda. Es la mejor manera de empezar tu colección, porque no puede faltar en ninguna!.',
            'categoria': 'Colores',
            'foto1': clasico,
            'foto2': clasico2,
            'foto3': clasico3,
            'precio': '$100'
        },
        { 'id': '2', 
            'nombre':'Freddy Merducky', 
            'descripcion': 'El famoso vocalista de la banda Queens. Tienen canciones tan espectaculares como Bohemian Quacksody, Another One Eats the Crumbs y Radio Quack Quack.',
            'categoria': 'Celebridades',
            'foto1': freddy,
            'foto2': freddy2,
            'foto3': freddy3,
            'precio': '$100'

        },
        { 'id': '3', 
            'nombre':'Pato de la Libertad', 
            'descripcion': 'La conocida estatua estadounidense. Viene desde New York para traerle libertad a todos los patos.',
            'categoria': 'Monumentos',
            'foto1': libertad,
            'foto2': libertad2,
            'foto3': libertad3,
            'precio': '$100'

        },
        { 'id': '4', 
            'nombre':'Harry Ponder', 
            'descripcion': 'El encantador protagonista de la famosa saga de libros y peliculas. Lo que pocos saben, es que en realidad es un pato cualquiera (sin ningún tipo de magia) haciendo cosplay. A pesar de eso, es un buen regalo para cualquier fan.',
            'categoria': 'Personajes',
            'foto1': potter,
            'foto2': potter2,
            'foto3': potter3,
            'precio': '$100'
        },
        { 'id': '5', 
            'nombre':'Spiderduck', 
            'descripcion': 'Su amigable vecino Spiderduck, nuestro aracnido favorito. Con sus habilidades se columpia por el negocio salvando a nuestros patos de los malos.',
            'categoria': 'Personajes',
            'foto1': spider,
            'foto2': spider2,
            'foto3': spider3,
            'precio': '$100'

        },
    ];
  }
  
  export default Productos;
  