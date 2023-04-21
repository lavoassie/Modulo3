//obtener fecha actual

let fechaActual = new Date();
let formatDate = fechaActual.getDate();
let traerMes = fechaActual.getMonth() + 1;
let traerAnio = fechaActual.getFullYear();
let fecha = `${formatDate} - ${traerMes} - ${traerAnio}`

document.getElementById("insertDate").innerHTML = fecha

alert("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los visos mediante esta plataforma.")

//obtener hora actual

let horaActual = fechaActual.getHours()
let minutosActual = fechaActual.getMinutes()
let horaFinal = `${horaActual}:${minutosActual}`

document.getElementById("insertTime").innerHTML = horaFinal


//El número de vuelo, y el terminal, deben mostrar un número nuevo cada vez que se refresque la página.
//flightBox y flightNumber

let nroPuerta = Math.ceil(Math.random()*10000)
document.getElementById("terminalNumber").innerHTML = nroPuerta

let nroVuelo = Math.floor(Math.random()*100)
document.getElementById("flightNumber").innerHTML = nroVuelo