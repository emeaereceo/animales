// console.log('Conectado...');
import { Leon, Lobo, Oso, Serpiente, Aguila } from './class.js';
import { animales } from './api.js';
import { pintarDatos } from './create.js';

const nuevoLeon = new Leon(
	'Alex',
	5,
	'aca va una imagen',
	'prueba de coment',
	'grrrr'
);

// nuevoLeon.rugir();

animales();

pintarDatos(nuevoLeon);
