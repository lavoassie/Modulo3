//obtener fecha actual

let fechaActual = new Date();
let formatDate = fechaActual.getDate();
let traerMes = fechaActual.getMonth() + 1;
let traerAnio = fechaActual.getFullYear();
let fecha = `${formatDate} - ${traerMes} - ${traerAnio}`

document.getElementById("fecha").innerHTML = fecha


//Creando elemento en el HTML

const newDiv = document.createElement("div");


newDiv.classList.add("container", "p-5", "d-flex", "justify-content-center", "align-items-center");


const cardElement = document.createElement("div");
cardElement.classList.add("card");
cardElement.style.width = "18rem";
cardElement.style.height = "32rem";


const cardBodyElement = document.createElement("div");
cardBodyElement.classList.add("card-body", "m-3");


const h5Element = document.createElement("h5");
h5Element.classList.add("card-title", "text-center");
h5Element.textContent = "¡Apresúrese!";


const pElement = document.createElement("p");
pElement.classList.add("card-text", "text-center");
pElement.textContent = `El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha: ` + fecha;


const divIngresarDatos = document.createElement("div");
divIngresarDatos.id = "div_ingresarDatos";


const inputUsuario = document.createElement("input");
inputUsuario.type = "text";
inputUsuario.id = "usuario";
inputUsuario.placeholder = "Usuario";

const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.id = "email";
inputEmail.placeholder = "Correo";

const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.placeholder = "Contraseña";


const buttonElement = document.createElement("button");
buttonElement.id = "inscribirse";
buttonElement.textContent = "Inscribirse";


const pElement2 = document.createElement("p");
pElement2.id = "parrafo";
pElement2.textContent = "¿Tienes una cuenta?";


const aElement = document.createElement("a");
aElement.href = "http://";
aElement.textContent = "Inicia sesión aquí";


newDiv.appendChild(cardElement);
cardElement.appendChild(cardBodyElement);
cardBodyElement.appendChild(h5Element);
cardBodyElement.appendChild(pElement);
cardBodyElement.appendChild(divIngresarDatos);
divIngresarDatos.appendChild(inputUsuario);
divIngresarDatos.appendChild(document.createElement("br"));
divIngresarDatos.appendChild(inputEmail);
divIngresarDatos.appendChild(document.createElement("br"));
divIngresarDatos.appendChild(inputPassword);
divIngresarDatos.appendChild(document.createElement("br"));
divIngresarDatos.appendChild(buttonElement);
divIngresarDatos.appendChild(document.createElement("br"));
divIngresarDatos.appendChild(pElement2);
pElement2.appendChild(aElement);


document.body.appendChild(newDiv);




