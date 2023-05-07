
function Gasto(nombre,monto){
    this.nombre = nombre;
    this.monto = monto;
};


let listaGastos = [];

function agregarGasto(nombre,monto) {
    let gasto = new Gasto(nombre,monto);
    listaGastos.push(gasto);
    let computoSaldo = actualizarSaldo();
    if(computoSaldo < 0){
        listaGastos.pop();
        alert("Agrega saldo a tu cuenta.")
    } else {
        let gastoActualizado = listaGastos.reduce((acumulador,valorActual) => acumulador + valorActual.monto, 0);
        totalGastos.innerHTML = String(gastoActualizado).replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    actualizarSaldo();
}

function actualizarTabla(){
    let html = "";
    listaGastos.forEach((gasto,index) => {
        html += `
        <tr>
            <td>${gasto.nombre}</td>
            <td>${gasto.monto}</td>
            <td style="cursor: pointer;"><i class="fa-solid fa-trash" onclick="eliminar(${index})"></i></td>
        </tr>
        `
    })
    bodyTabla.innerHTML = html;
    actualizarSaldo();
}

function eliminar(index){
    listaGastos = listaGastos.filter((gasto,indice) => indice != index);
    let gastoActualizado = listaGastos.reduce((acumulador,valorActual) => acumulador + valorActual.monto, 0);
    totalGastos.innerHTML = String(gastoActualizado).replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    actualizarTabla();
}


function actualizarSaldo(){
    let pptoResumen = presupuesto.innerHTML.replaceAll(".","");
    let gastosResumen = listaGastos.reduce((acumulador,valorActual) => acumulador + valorActual.monto,0);
    let nuevoSaldo = String(pptoResumen - gastosResumen);
    saldo.innerText = nuevoSaldo.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return nuevoSaldo;
}

let btnCalcular = document.getElementById("btnCalcular");
let inputPresupueto = document.getElementById("inputPresupueto");
let presupuesto = document.getElementById("presupuesto");
let totalGastos = document.getElementById("totalGastos");
let saldo = document.getElementById("saldo");
let btnAnadir = document.getElementById("btnAnadir");

btnCalcular.addEventListener('click', function() {
    presupuesto.innerHTML = inputPresupueto.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    actualizarSaldo();
    presupuesto.innerHTML > 0 ? btnAnadir.removeAttribute("disabled") : btnAnadir.setAttribute("disable",true);
})

let inputNombreGasto = document.getElementById("inputNombreGasto");
let inputMontoGasto = document.getElementById("inputMontoGasto");
let bodyTabla = document.getElementById("bodyTabla");

btnAnadir.addEventListener('click', function() {
    let nombre = inputNombreGasto.value;
    let monto = parseInt(inputMontoGasto.value);
    agregarGasto(nombre,monto);
    actualizarTabla();
})