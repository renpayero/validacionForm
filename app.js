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
var inputs = document.querySelectorAll('input')

var validarFormulario = (e) => {
	switch(e.target.name){
		case 'nombre':
			document.getElementById('titulo-nombre').textContent = 'Hola ' + e.target.value + '!';
			if (expresiones.nombreCompletoRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular\
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
				document.getElementById('email-correcto').style.display = 'flex'
				document.getElementById('email-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('email-incorrecto').style.display = 'flex'
				document.getElementById('email-correcto').style.display = 'none'
			}
			break
		case 'contrasena':
			if (expresiones.contraseñaRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('contrasena-correcto').style.display = 'flex'
				document.getElementById('contrasena-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('contrasena-incorrecto').style.display = 'flex'
				document.getElementById('contrasena-correcto').style.display = 'none'
			}
			break
		case 'repetir-contrasena':
			if (document.getElementById('repetir-contrasena').value == document.getElementById('contrasena').value){ 
				document.getElementById('repetir-contrasena-correcto').style.display = 'flex'
				document.getElementById('repetir-contrasena-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('repetir-contrasena-incorrecto').style.display = 'flex'
				document.getElementById('repetir-contrasena-correcto').style.display = 'none'
			}
			break
		case 'edad':
			if (expresiones.edadRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('edad-correcto').style.display = 'flex'
				document.getElementById('edad-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('edad-incorrecto').style.display = 'flex'
				document.getElementById('edad-correcto').style.display = 'none'
			}
			break
		case 'telefono':
			if (expresiones.telefonoRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('telefono-correcto').style.display = 'flex'
				document.getElementById('telefono-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('telefono-incorrecto').style.display = 'flex'
				document.getElementById('telefono-correcto').style.display = 'none'
			}
			break
		case 'direccion':
			if (expresiones.direccionRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('direccion-correcto').style.display = 'flex'
				document.getElementById('direccion-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('direccion-incorrecto').style.display = 'flex'
				document.getElementById('direccion-correcto').style.display = 'none'
			}
			break
		case 'ciudad':
			if (expresiones.ciudadRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('ciudad-correcto').style.display = 'flex'
				document.getElementById('ciudad-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('ciudad-incorrecto').style.display = 'flex'
				document.getElementById('ciudad-correcto').style.display = 'none'
			}
			break
		case 'codigo-postal':
			if (expresiones.codigoPostalRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('codigo-postal-correcto').style.display = 'flex'
				document.getElementById('codigo-postal-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('codigo-postal-incorrecto').style.display = 'flex'
				document.getElementById('codigo-postal-correcto').style.display = 'none'
			}
			break
		case 'dni':
			if (expresiones.dniRegex.test(e.target.value)){ //test y match sirven para este caso, devuelven true o false si se cumple la expresion regular
				document.getElementById('dni-correcto').style.display = 'flex'
				document.getElementById('dni-incorrecto').style.display = 'none'
			}
			else {
				document.getElementById('dni-incorrecto').style.display = 'flex'
				document.getElementById('dni-correcto').style.display = 'none'
			}
			break
	}
}


function actualizarTitulo(nombre) {
	document.getElementById('titulo-nombre').textContent = 'Hola ' + nombre;
  }

inputs.forEach((i)=>{
	i.addEventListener('keyup', validarFormulario)
	i.addEventListener('blur', validarFormulario)
})

formulario.addEventListener("sumbit", (r) =>{
	r.preventDefault()
})
