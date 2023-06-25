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
var sumbit = document.querySelector('button')
var formulario = document.querySelector('form')

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

inputs.forEach((i)=>{
	i.addEventListener('keyup', validarFormulario)
	i.addEventListener('blur', validarFormulario)
})
// sumbit.addEventListener('click', function(){
// 	var mensajeAlert= "Los datos se han enviado exitosamente! Los datos son los siguiente:\nNombre Completo: " + 
// 	document.getElementById("nombre").value +
// 	 "\nEmail: " + document.getElementById("email").value+ 
// 	 "\nContraseña: " + document.getElementById("contrasena").value +
// 	 "\nEdad: " + document.getElementById("edad").value + 
// 	 "\nTelefono: " + document.getElementById("telefono").value +
// 	 "\nDireccion: " + document.getElementById("direccion").value + 
// 	 "\nCiudad: " + document.getElementById("ciudad").value + 
// 	 "\nCodigo postal: " + document.getElementById("codigo-postal").value +
// 	 "\nDNI: " + document.getElementById("dni").value
// 	alert(mensajeAlert)
// })


formulario.addEventListener("submit", function(evento) {
	evento.preventDefault()
  
	var nombreCompleto = document.getElementById("nombre").value
	var email = document.getElementById("email").value
	var contraseña = document.getElementById("contrasena").value
	var repetirContraseña = document.getElementById("repetir-contrasena").value
	var edad = document.getElementById("edad").value
	var telefono = document.getElementById("telefono").value
	var direccion = document.getElementById("direccion").value
	var ciudad = document.getElementById("ciudad").value
	var codigoPostal = document.getElementById("codigo-postal").value
	var dni = document.getElementById('dni').value
  
	var nombreCompletoRegex = /^(?=.*\s).{6,}$/
	var emailRegex = /^\S+@\S+\.\S+$/
	var contraseñaRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
	var edadRegex = /^18|[1-9][0-9]$/
	var telefonoRegex = /^\d{7,}$/
	var direccionRegex = /^(?=.*\s)[a-zA-Z0-9\s]{5,}$/
	var ciudadRegex = /^.{3,}$/
	var codigoPostalRegex = /^.{3,}$/
	var dniRegex = /^\d{7,8}$/
  
	if (!nombreCompletoRegex.test(nombreCompleto)) {
	  alert("El nombre completo es inválido, debe tener más de 6 letras y al menos un espacio entre medio.")
	  return
	}
  
	if (!emailRegex.test(email)) {
	  alert("El correo electrónico es inválido, debe tener un formato de email válido.")
	  return
	}
  
	if (!contraseñaRegex.test(contraseña)) {
	  alert("La contraseña es inválida, al menos 8 caracteres, formados por letras y números.")
	  return
	}
	if (contraseña != repetirContraseña){ 
		alert("Las contraseñas no coinciden")
	  return
	}
	if (!edadRegex.test(edad)) {
	  alert("La edad es inválida, número entero mayor o igual a 18.")
	  return
	}
  
	if (!telefonoRegex.test(telefono)) {
	  alert("El teléfono es inválido")
	  return
	}
  
	if (!direccionRegex.test(direccion)) {
	  alert("La dirección es inválida, número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.")
	  return
	}
  
	if (!ciudadRegex.test(ciudad)) {
	  alert("La ciudad es inválida, al menos 5 caracteres, con letras, números y un espacio en el medio.")
	  return
	}
  
	if (!codigoPostalRegex.test(codigoPostal)) {
	  alert("El código postal es inválido, al menos 3 caracteres.")
	  return
	}
  
	if (!dniRegex.test(dni)) {
	  alert("El DNI es inválido, número de 7 u 8 dígitos.")
	  return
	}
  
	var mensajeAlert = "Los datos se han enviado exitosamente! Los datos son los siguientes:\n" +
	  "Nombre Completo: " + nombreCompleto +
	  "\nEmail: " + email +
	  "\nContraseña: " + contraseña +
	  "\nEdad: " + edad +
	  "\nTeléfono: " + telefono +
	  "\nDirección: " + direccion +
	  "\nCiudad: " + ciudad +
	  "\nCódigo Postal: " + codigoPostal +
	  "\nDNI: " + dni;
  
	alert(mensajeAlert)
	formulario.submit()
  })