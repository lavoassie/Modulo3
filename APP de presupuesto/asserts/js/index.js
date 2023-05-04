let inputPresupuesto = document.getElementById("presupuesto")
inputPresupuesto.addEventListener('keyup',function(){
  let presupuesto = inputPresupuesto.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")
  inputPresupuesto.value = presupuesto
  console.log(presupuesto)
  document.getElementById("totalPresupuesto").innerHTML = `CLP: ${presupuesto}`
})