//[x]Capturar el presupuesto del cliente
//  [x]Capturar el valor del input al ejecutar el botón Calcular
//  [x]Crear variables que van a obtener el valor de los inputy botones
//  [x]Que el presupuesto se vea proyectado en la parte derecha "presupuesto"
//Capturar el nombre del gasto y la cantidad al hacer click en el botón añadir gasto
//  que este valor se vea reflejado en los elementos GASTOS del lado derecho
//Mostrar el saldo final
//Mostrar una lista de gastos que ingresa el usuario


let inputPresupuesto = document.getElementById("inputPresupuesto");
let botonPresupuesto = document.getElementById("btnCalcular");
let presupuesto = document.getElementById("presupuesto");
let html = "";

botonPresupuesto.addEventListener("click", function(){
    let capturandoPresupuesto = inputPresupuesto.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    presupuesto.innerHTML = capturandoPresupuesto;
})