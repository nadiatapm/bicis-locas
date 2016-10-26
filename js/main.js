function validateForm(){
	//todos los campos son obligatorios exepto los dos ultimos
	//los campos nombre y apellidos solo deben permitir caracteres de la a-z
	//para  los campos de nombre y apellido la primera letra debe ser mayuscula

	var name = document.getElementById("name").value;
	if(name == null || name.length == 0 || /^\s+$/.test(name)){
		alert("Nombre no valido");
	}else{
		return false;
	}

	var lastname = document.getElementById("lastname").value;
	if(lastname == null || lastname.length == 0 || /^\s+$/.test(lastname)){
		alert("campo obligatorio");
		return false;
	}

	//validar campo email tenga formato valido .
	function validarEmail(){
		var email = document.getElementById("input-email").value;
		if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))){
			alert("La dirección de email " + valor + " es correcta.");
		} else {
			alert("La dirección de email es incorrecta.");
		}
			return false;
	}	
	//el campo password debe tener al menos 6 caracteres 
	//password no debe ser igual a "password" o "123456" o "0987654"
	function password (){
		var clave = document.getElementById("input-password").value;
		if()

	}
	//el valor seleccionado bicis debe ser una opcion presentada
	//si algun campo presenta erro debe informar error
    return true;
}



