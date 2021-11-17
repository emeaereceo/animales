const url = 'http://127.0.0.1:5500/animales.json';

const animales = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	} finally {
		console.log('exito');
	}
};

export { animales };
