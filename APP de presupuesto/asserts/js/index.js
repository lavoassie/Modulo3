//Creando las variables para capturar los input y botones
let inputPresupuesto = document.getElementById("inputPresupuesto");
let botonCalcular = document.getElementById("btnCalcular");
let inputNombreGasto = document.getElementById("inputNombreGasto");
let inputMontoGasto = document.getElementById("inputMontoGasto");
let presupuesto = document.getElementById("presupuesto"); //es el id del párrafo que se modificará en el HTML


//Capturando el presupuesto del usuario y mostrándolo en la página
botonCalcular.addEventListener("click", function () {
    presupuesto.innerHTML = inputPresupuesto.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})

//añadiendo gastos
let botonAgregar = document.getElementById("btnAgregarGasto");
let gastos = document.getElementById("gastos");
let saldo = document.getElementById("saldo")

botonAgregar.addEventListener("click", function () {
    gastos.innerHTML = inputNombreGasto.value;
    saldo.innerHTML = inputMontoGasto.value;
    // document.getElementById("nombreGasto").innerHTML = `${inputValueName}`
    // document.getElementById("valorGasto").innerHTML = `$ ${inputValueCLP}`
    // document.getElementById("gasto").innerHTML = `$ ${inputValueCLP}`
})