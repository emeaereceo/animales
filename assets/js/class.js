class Animal {
	#nombre;
	#edad;
	#img;
	#comentarios;
	#sonido;
	constructor(nombre, edad, img, comentarios, sonido) {
		this.#nombre = nombre;
		this.#edad = edad;
		this.#img = img;
		this.#comentarios = comentarios;
		this.#sonido = sonido;
	}
	get getNombre() {
		return this.#nombre;
	}
	get getEdad() {
		return this.#edad;
	}
	get getImg() {
		return this.#img;
	}
	set setComentarios(comentario) {
		this.#comentarios = comentario;
	}
	get getSonido() {
		return this.#sonido;
	}
}

class Leon extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	rugir() {
		sonidoAnimal.src = `./assets/sounds/${this.getSonido}`;
		sonidoAnimal.play();
	}
}

class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	aullar() {
		sonidoAnimal.src = `./assets/sounds/${this.getSonido}`;
		sonidoAnimal.play();
	}
}

class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	grunir() {
		sonidoAnimal.src = `./assets/sounds/${this.getSonido}`;
		sonidoAnimal.play();
	}
}

class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	sisear() {
		sonidoAnimal.src = `./assets/sounds/${this.getSonido}`;
		sonidoAnimal.play();
	}
}

class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	chillar() {
		sonidoAnimal.src = `./assets/sounds/${this.getSonido}`;
		sonidoAnimal.play();
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
