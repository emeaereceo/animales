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
		console.log('rugidoooo');
	}
}

class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	aullar() {
		console.log('Aulla');
	}
}

class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	grunir() {
		console.log('Gruñido');
	}
}

class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	sisear() {
		console.log('Siseo');
	}
}

class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	chillar() {
		console.log('chillido');
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
