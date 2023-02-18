//otro
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form-input');

const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$,/   
}
const campo = {
	nombres: false,
	correo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombres":
			validarCampo(expresiones.nombres, e.target, 'nombres');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campo.nombre && campo.correo){
		formulario.reset();

		document.getElementById('form-mensaje-exito').classList.add('form-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form-ensaje-exito').classList.remove('form-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('form-grupo-correcto').forEach((icono) => {
			icono.classList.remove('form-grupo-correcto');
		});
	} else {
		document.getElementById('form-mensaje').classList.add('form-mensaje-activo');
	}
});