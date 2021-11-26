// console.log('Conectado...');
import { Leon, Lobo, Oso, Serpiente, Aguila } from './class.js';
import { animalesApi } from './api.js';
import { pintarDatos, limpiarFormulario } from './createCard.js';

const vistaPrevia = document.querySelector('#preview');
const cards = document.querySelector('#Animales');
const animalSet = document.querySelector('#animal');
const btnRegistrar = document.querySelector('#btnRegistrar');
const previewImg = document.createElement('img');
const audio = document.querySelector('#player');
const source = document.createElement('source');

let sonido;
let arrayAnimales = [];

document.addEventListener('DOMContentLoaded', (e) => {
	const lS = localStorage.getItem('arrayAnimales');
	if (lS) {
		arrayAnimales = JSON.parse(lS);
		console.log(arrayAnimales);
		// pintarDatos(arrayAnimales[0]);
		pintarDatos(arrayAnimales);
	}
});
// EVENTO PARA OBTENER EL DETALLE DEL OBJETO SELECCIONADO Y LA IMAGEN
animalSet.addEventListener('change', async () => {
	vistaPrevia.textContent = '';
	const animales = await animalesApi();

	const animalPreview = animales.findIndex((ani) => {
		return ani.name === animalSet.value;
	});

	sonido = animales[animalPreview].sonido;
	let img = animales[animalPreview].imagen;
	previewImg.setAttribute('src', `./assets/imgs/${img}`);
	previewImg.setAttribute('height', '100%');
	previewImg.setAttribute('width', '100%');
	// elementoImg.height = 100%;
	vistaPrevia.appendChild(previewImg);
});

btnRegistrar.addEventListener('click', (e) => {
	// formulario.forEach((i) => {
	// 	console.log(i.id);
	// 	console.log(i.value);
	// });
	const animal = animalSet.value;
	const edad = document.querySelector('#edad');
	const imagen = previewImg.src;
	const coment = document.querySelector('#comentarios');
	const grito = `./assets/sounds/${sonido}`;

	switch (animal) {
		case 'Leon':
			const nuevoLeon = new Leon(
				animal,
				edad.value,
				imagen,
				coment.value,
				grito
			);
			nuevoLeon.id = `id-${Date.now()}`;
			arrayAnimales.push(nuevoLeon);

			break;
		case 'Lobo':
			const nuevoLobo = new Lobo(
				animal,
				edad.value,
				imagen,
				coment.value,
				grito
			);
			nuevoLobo.id = `id-${Date.now()}`;
			arrayAnimales.push(nuevoLobo);
			break;
		case 'Oso':
			const nuevoOso = new Oso(animal, edad.value, imagen, coment.value, grito);
			nuevoOso.id = `id-${Date.now()}`;
			arrayAnimales.push(nuevoOso);
			break;
		case 'Serpiente':
			const nuevoSerpiente = new Serpiente(
				animal,
				edad.value,
				imagen,
				coment.value,
				grito
			);
			nuevoSerpiente.id = `id-${Date.now()}`;
			arrayAnimales.push(nuevoSerpiente);
			break;
		case 'Aguila':
			const nuevoAguila = new Aguila(
				animal,
				edad.value,
				imagen,
				coment.value,
				grito
			);
			nuevoAguila.id = `id-${Date.now()}`;
			arrayAnimales.push(nuevoAguila);
			break;
		default:
			console.log('Ingrese un animal');
			break;
	}

	pintarDatos(arrayAnimales);
	limpiarFormulario();
});

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
	backdrop: true,
});
// BUSCO EVENTO EN LAS CARDS
cards.addEventListener('click', (e) => {
	// console.log(e);

	if (e.target.matches('img')) {
		// console.log('modal');
		const ubicacionModal = document.getElementById('exampleModal');

		let resultado = arrayAnimales.find(
			(item) => item.id === e.target.dataset.id
		);
		// console.log(resultado.nombre);

		ubicacionModal.innerHTML = `
		<div class="modal-dialog modal-dialog-centered w-25" role="document">
				<div class="modal-content bg-dark">
					<div class="modal-header">
						<h5 class="modal-title text-white m-auto">${resultado.nombre}</h5>
					</div>
					<div class="modal-body">
						<img class="w-100" src="${resultado.img}" />
						<p class="text-white text-center" id="modal-edad">
							${resultado.edad}
						</p>
						<p class="text-white text-center">Comentarios</p>
						<p class="text-white text-center" id="modal-comentarios">
							${resultado.comentarios}
						</p>
					</div>
					
				</div>
			</div>`;
		myModal.toggle();
	} else if (e.target.matches('.btn-secondary')) {
		// tengo inconveniente al cambiar de sonido
		// se cambia el html, pero el audio no surge el efecto deseado
		let sound = arrayAnimales.find((item) => item.id === e.target.dataset.id);
		// console.log(sound.sonido);
		if (sound.sonido) {
			// source.src = '';
			source.src = `${sound.sonido}`;
			source.type = 'audio/mpeg';
			audio.appendChild(source);
			audio.play();
			// console.log(audio);
		}
	} else if (e.target.matches('.btn-danger')) {
		arrayAnimales = arrayAnimales.filter(
			(item) => item.id !== e.target.dataset.id
		);
		pintarDatos(arrayAnimales);
	}
});
