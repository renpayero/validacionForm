const expresiones = {
	nombreCompletoRegex : /^(?=.*\s).{6,}$/,
	emailRegex : /^\S+@\S+\.\S+$/,
	contraseñaRegex : /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
	edadRegex : /^18|[1-9][0-9]$/,
	telefonoRegex : /^\d{7,}$/,
	direccionRegex : /^(?=.*\s)[a-zA-Z0-9\s]{5,}$/,
	ciudadRegex : /^.{3,}$/,
	codigoPostalRegex : /^.{3,}$/,
	dniRegex : /^\d{7,8}$/,
}


var validarFormulario = (e) => {
	switch(e.target.name){
		case 'nombre':
			if (expresiones.nombreCompletoRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('nombre-correcto').style.display = 'flex'
				document.getElementById('nombre-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('nombre-incorrecto').style.display = 'flex'
				document.getElementById('nombre-correcto').style.display = 'none'
			}
			break
		case 'email':
			if (expresiones.emailRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-email').classList.remove('formulario-incorrecto')
				document.getElementById('grupo-email').classList.add('formulario-correcto')
				document.getElementById('grupo-email').appendChild(textP_correct)
				document.getElementById('grupo-email').removeChild(textP_incorrect)
			}
			else {
				document.getElementById('grupo-nombre').classList.add('formulario-incorrecto')
				document.getElementById('grupo-nombre').classList.remove('formulario-correcto')
				document.getElementById('grupo-nombre').appendChild(textP_incorrect)
				document.getElementById('grupo-nombre').removeChild(textP_correct)
			}
			break
		case 'contrasena':
			if (expresiones.contraseñaRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-contrasena').classList.remove('formulario-incorrecto')
			}
			else {
				document.getElementById('grupo-nombre').classList.add('formulario-incorrecto')
				document.getElementById('grupo-nombre').classList.remove('formulario-correcto')
				document.getElementById('grupo-nombre').appendChild(textP_incorrect)
				document.getElementById('grupo-nombre').removeChild(textP_correct)
			}
			break
		case 'repetir-contrasena':
			if (document.getElementById('repetir-contrasena').value == document.getElementById('contrasena').value){ 
				document.getElementById('grupo-repetir--contrasena').classList.remove('formulario-incorrecto')
				console.log('se quita el rojo')
			}
			else {
				console.log('se pinta de rojo')
				document.getElementById('grupo-repetir--contrasena').classList.add('formulario-incorrecto')
			}
			break
		case 'edad':
			if (expresiones.edadRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-edad').classList.remove('formulario-incorrecto')
			}
			else {
				document.getElementById('grupo-edad').classList.add('formulario-incorrecto')
			}
			break
		case 'telefono':
			if (expresiones.telefonoRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-telefono').classList.remove('formulario-incorrecto')
			}
			else {
				document.getElementById('grupo-telefono').classList.add('formulario-incorrecto')
			}
			break
		case 'direccion':
			if (expresiones.direccionRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-direccion').classList.remove('formulario-incorrecto')
			}
			else {
				document.getElementById('grupo-direccion').classList.add('formulario-incorrecto')
			}
			break
		case 'ciudad':
			if (expresiones.ciudadRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-ciudad').classList.remove('formulario-incorrecto')
			}
			else {
				document.getElementById('grupo-ciudad').classList.add('formulario-incorrecto')
			}
			break
		case 'codigo-postal':
			if (expresiones.codigoPostalRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-codigo--postal').classList.remove('formulario-incorrecto')
			}
			else {
				document.getElementById('grupo-codigo--postal').classList.add('formulario-incorrecto')
			}
			break
		case 'dni':
			if (expresiones.dniRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('grupo-dni').classList.remove('formulario-incorrecto')
			}
			else {
				document.getElementById('grupo-dni').classList.add('formulario-incorrecto')
			}
			break
	}
}

inputs.forEach((i)=>{
	i.addEventListener('keyup', validarFormulario)
	i.addEventListener('blur', validarFormulario)
})

formulario.addEventListener("sumbit", (e) =>{
	e.preventDefault()
})
