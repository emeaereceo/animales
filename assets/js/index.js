// console.log('Conectado...');
import { Leon, Lobo, Oso, Serpiente, Aguila } from './class.js';
import { animales } from './api.js';
import { pintarDatos } from './createCard.js';

const animalSet = document.querySelector('#animal');
const edad = document.querySelector('#edad');
const comentarios = document.querySelector('#comentarios');
const vistaPrevia = document.querySelector('#preview');
const btnRegistrar = document.querySelector('#btnRegistrar');

const elementoImg = document.createElement('img');
const allCards = document.querySelector('#Animales');
let sonidoAnimal;

const animalesEnInvestigacion = [];

// EVENTO PARA OBTENER EL DETALLE DEL OBJETO SELECCIONADO Y LA IMAGEN
animalSet.addEventListener('change', async () => {
	vistaPrevia.textContent = '';
	const animalesApi = await animales();
	// const elementoImg = document.createElement('img');

	// DEVUELVO EL INDICE DE MI BUSQUEDA PARA REFERENCIARLO EN MI OBJETO
	const animalPreview = animalesApi.findIndex((ani) => {
		return ani.name === animalSet.value;
	});
	const img = animalesApi[animalPreview].imagen;

	sonidoAnimal = animalesApi[animalPreview].sonido;

	elementoImg.setAttribute('src', `./assets/imgs/${img}`);
	elementoImg.setAttribute('height', '100%');
	elementoImg.setAttribute('width', '100%');
	// elementoImg.style.maxWidth = '300px';
	vistaPrevia.appendChild(elementoImg);
	// console.log('./assets/imgs/' + img);
});

btnRegistrar.addEventListener('click', (e) => {
	// EL NUMERO DE REGISTRO COMIENZA EN CERO YA QUE AUN NO SE INGRESAN DATOS AL ARREGLO
	// DE ESTA FORMA COINCIDE CON EL ORDEN INDICE DEL ARREGLO
	let nRegistro = animalesEnInvestigacion.length;
	agregar();
	// RESETEAR FORMULARIO

	console.table(animalesEnInvestigacion);

	// console.log(animalesEnInvestigacion[animalesEnInvestigacion.length - 1]);
	pintarDatos(animalesEnInvestigacion[nRegistro]);
});

const agregar = () => {
	let rutaImg = elementoImg.getAttribute('src');
	if (animalSet.value === 'Leon') {
		animalesEnInvestigacion.push(
			new Leon(
				animalSet.value,
				edad.value,
				rutaImg,
				comentarios.value,
				sonidoAnimal
			)
		);
	} else if (animalSet.value === 'Lobo') {
		animalesEnInvestigacion.push(
			new Lobo(
				animalSet.value,
				edad.value,
				rutaImg,
				comentarios.value,
				sonidoAnimal
			)
		);
	} else if (animalSet.value === 'Oso') {
		animalesEnInvestigacion.push(
			new Oso(animalSet.value, edad.value, rutaImg, comentarios.value, 'sonido')
		);
	} else if (animalSet.value === 'Serpiente') {
		animalesEnInvestigacion.push(
			new Serpiente(
				animalSet.value,
				edad.value,
				rutaImg,
				comentarios.value,
				sonidoAnimal
			)
		);
	} else if (animalSet.value === 'Aguila') {
		animalesEnInvestigacion.push(
			new Aguila(
				animalSet.value,
				edad.value,
				rutaImg,
				comentarios.value,
				sonidoAnimal
			)
		);
	} else {
		console.log('Seleccion Invalida');
	}
};

allCards.addEventListener('click', (e) => {
	let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
		keyboard: false,
	});

	console.log(e);

	if (e.target.tagName.toLowerCase() === 'img') {
		myModal.toggle();
	} else if (
		e.target.tagName.toLowerCase() === 'button' &&
		e.target.name === 'sonido'
	) {
		console.log('aca va el sonido');
	} else if (
		e.target.tagName.toLowerCase() === 'button' &&
		e.target.name === 'eliminar'
	) {
		console.log('Esto deberia eliminar');
	}
});
