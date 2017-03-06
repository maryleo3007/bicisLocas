var nombre  = document.getElementById('name');
var apellido = document.getElementById('lastname');
var email = document.getElementById('input-email');
var pass = document.getElementById('input-password');
var select = document.getElementById('bicis').selectedIndex;
var resultado = document.getElementById('mostrar');
//funcion para validar los input
function validateForm(event){
	/* ***********validacion del nombre ***********/
  //valida que no escriba un nombre vacio, ni espacios en blanco ni números.
  if(nombre.value == "" || nombre.value == null || nombre.value == 0 || /[0-9]/.test(nombre.value)){
    alert("Debe Ingresar un Nombre");
  }
  var nombreMayuscula = nombre.value.charAt(0)
  if(nombreMayuscula.toUpperCase() != nombreMayuscula){
    alert("Escriba la primera letra mayúscula.");
  }
  /* ***********validacion del apellido ***********/
  //valida que no escriba un apellido vacio, ni espacios en blanco ni números.
  if(apellido.value == "" || apellido.value == null || apellido.value == 0 || /[0-9]/.test(apellido.value)){
    alert("Debe Ingresar un Apellido");
  }
  var apellidoMayuscula = apellido.value.charAt(0)
  if(apellidoMayuscula.toUpperCase() != apellidoMayuscula){
    alert("Escriba la primera letra mayúscula.");
  }
  /* ***********validacion del correo ***********/
    if(email.value == "" || email.value == null || email.value == 0){
    alert("Debe Ingresar un correo");
  }
  var expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/ ;
  if(email.value == "" || expresion.test(email.value)){
    alert("escriba un correo válido");
  }
  /* ***********validacion del password ***********/
  if(pass.value == "password"|| pass.value == "123456" || pass.value == "098754"){
    alert("escriba una contraseña válido");
  }
  if(!(/.{6,}/.test(pass.value))){
    alert("La contrasenia debe ser mayor  a 6 caraceteres");
  }
  if(select == null){
    alert("Debe seleccionar un valor");
  }
  resultado.innerHTML = "Nombre: "+nombre.value+"<br>"+
                        "Apellido: "+apellido.value+"<br>"+
                        "Correo: "+email.value;
}

/*function mostrar(event){

  validateForm();
}*/
