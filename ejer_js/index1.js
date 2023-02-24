function procesar(){

  let precio = document.getElementById('precio').value
  let descuento = parseInt(document.getElementById('descuento').value)
  alert(`su total a pagar es ${precio-(precio * descuento / 100)}`)
  const totalDinero = precio-(precio * descuento / 100)
  setLocalStorage(totalDinero)
}

arrayTotal = []

function setLocalStorage(precio){
  arrayTotal.push(precio)
  localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
  alert(`El precio se guardo en la base de datos`)
  limpiador()
}
function limpiador(){
  document.getElementById('precio').value=0
 document.getElementById('descuento').value=0
}