const cards = document.querySelector('#Animales');
const templateCard = document.querySelector('#templateCard').content;
const fragment = document.createDocumentFragment();

const pintarDatos = (animal) => {
	const clone = templateCard.cloneNode(true);
	clone.querySelector('h5').textContent = `${animal.getNombre}`;
	clone.querySelector('p').textContent = `${animal.getEdad}`;
	fragment.appendChild(clone);

	cards.appendChild(fragment);
};

export { pintarDatos };
