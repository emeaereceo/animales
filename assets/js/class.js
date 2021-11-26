class Animal {
	nombre;
	edad;
	img;
	comentarios;
	sonido;
	constructor(nombre, edad, img, comentarios, sonido) {
		this.nombre = nombre;
		this.edad = edad;
		this.img = img;
		this.comentarios = comentarios;
		this.sonido = sonido;
	}
	get getNombre() {
		return this.nombre;
	}
	get getEdad() {
		return this.edad;
	}
	get getImg() {
		return this.img;
	}
	set setComentarios(comentario) {
		this.comentarios = comentario;
	}
	get getSonido() {
		// return this.sonido;
		return `./assets/sounds/${this.sonido}`;
	}
}

class Leon extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	rugir() {
		sonido.src = `./assets/sounds/${this.getSonido}`;
		// sonido.src = this.getSonido;
		sonido.play();
	}
}

class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	aullar() {
		sonido.src = `./assets/sounds/${this.getSonido}`;
		sonido.play();
	}
}

class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	grunir() {
		sonido.src = `./assets/sounds/${this.getSonido}`;
		sonido.play();
	}
}

class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	sisear() {
		sonido.src = `./assets/sounds/${this.getSonido}`;
		sonido.play();
	}
}

class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	chillar() {
		sonido.src = `./assets/sounds/${this.getSonido}`;
		sonido.play();
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
