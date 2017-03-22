var correo = ""; //esta variable almacena el correo ingresado por el usuario
var contrasenia = "";//esta variable almacena la contraseña ingresada por el usuario

//La función traducir actúa de manera inmediata al abrir nuestra página, traduce al idioma español
function traducir(){
  var titulo = document.getElementById("form-signin-heading");
  var correo = document.getElementById("inputEmail");
  var contrasena = document.getElementById("inputPassword");
  var recuerdame = document.getElementsByTagName("span")[0];
  var boton = document.getElementsByClassName("btn")[0];

  titulo.innerHTML = "Por favor inicia una sesión";
  correo.innerHTML = "Correo Electrónico";
  contrasena.innerHTML = "Contraseña";
  recuerdame.innerHTML = "Recordar Datos";
  boton.innerHTML = "Iniciar Sesión";
}
console.log(traducir());

//Función almacenar me permite guardar los datos ingresados por el usuario en las variables con scope global
function almacenar(){
  correo = document.getElementById("inputEmail").value;
  console.log(correo);
  contrasenia = document.getElementById("inputPassword").value;
  console.log(contrasenia);
}
console.log(almacenar());

//La función imprimir nos permite que al hacer click en el botón "iniciar sesión" nos muestre los datos que se ingresaron
function imprimir (){
  document.getElementById("titulo").innerHTML = "Datos de formulario";
  document.getElementById("a").innerHTML = "<br> <h4> El correo electrónico ingresado es: </h4></br>" + correo;
  document.getElementById("b").innerHTML = "<br> <h4> La clave ingresada es: </h4></br>" + contrasenia;
}
