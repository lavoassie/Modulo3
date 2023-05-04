//Añadiendo el presupuesto del usuario
let botonPresupuesto = document.getElementById("botonPresupuesto");
botonPresupuesto.addEventListener('click',function(){
  let inputPresupuesto = document.getElementById("inputPresupuesto")
  let inputValue = inputPresupuesto.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")
  console.log(inputValue)
  document.getElementById("totalPresupuesto").innerHTML = `$ ${inputValue}`
})

//añadiendo gastos

let botonAgregar = document.getElementById("buttonAdd");
botonAgregar.addEventListener('click',function(){
  let inputNombre = document.getElementById("inputName");
  let inputValor = document.getElementById("inputValor");
  let inputValueName = inputNombre.value
  let inputValueCLP = inputValor.value
  console.log(inputValueName, inputValueCLP)
  document.getElementById("nombreGasto").innerHTML = `${inputValueName}`
  document.getElementById("valorGasto").innerHTML = `$ ${inputValueCLP}`
  document.getElementById("gasto").innerHTML = `$ ${inputValueCLP}`
})



//restar 