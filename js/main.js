function validateForm(){
	/*todos los campos son obligatorios exepto los dos ultimos
	los campos nombre y apellidos solo deben permitir caracteres de la a-z
	para  los campos de nombre y apellido la primera letra debe ser mayuscula*/

	function validarNombre(){
		var name = document.getElementById("name").value;	
		if(name == null || name.length == 0 ){
			alert('Campo obligatorio');
			return false;
		}else if(!(name[0] == name[0].toUpperCase())){
			alert('Nombre debe comenzar en Mayusculas');
			return false;
		}else if(/^[a-zA-z\s\ñ\Ñ]+$/){
			alert('Nombre solo debe tener letras');
			return false;
		}else{
			return true;
		}
	}
validarNombre();

	function validarApellido(){
		var lastname = document.getElementById("lastname").value;
		if(lastname == null || lastname.length == 0){
			alert('Campo obligatorio');
			return false;
		}else if(!(lastname[0] == lastname[0].toUpperCase())){
			alert('Nombre debe comenzar con Mayuscula');
			return false;
		}else if(/^[a-zA-z\s\ñ\Ñ]+$/){
			alert('Nombre solo debe tener letras');
			return false;
		}else{
			return true;
		}
	}
validarApellido();

	//validar campo email tenga formato valido .
	/*function validarEmail(){
		var caracter =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  
		var correo = document.getElementById("input-email").value;
		if(correo === null || correo.length === 0){
			alert("la dirección de email" + valor + "Es correcto");
		else()
			alert("La dirección de email es incorrecta.");
		}else{
			return true;
		}
	}	
validarEmail();	*/

	//el campo password debe tener al menos 6 caracteres 
	//password no debe ser igual a "password" o "123456" o "0987654"
	function validarClave(){
		var clave = document.getElementById('input-password').value;
		if(clave === null || clave.length === 0){
			alert('Ingrese password');
			return false;	
		}else if(clave.length<6){
			alert ('password debe ser de 6 caracteres');
			return false;
		}else if(clave === '123456' || clave === '098765' || clave === 'password'){
			alert('password invalida')
		}else{
			return true;
		}	
	}	
validarClave();	

	//el valor seleccionado bicis debe ser una opcion presentada
	function seleccionBici(){
		var bici = document.getElementByTagName('select').value;
		for(var i = 0; i < bici.length; i++){
			if(bici[i].value === "0"){
				alert('Seleciona tu bici!!!!');
				return false;
			}
			return true;
		}
	}
seleccionBici();
}
	



