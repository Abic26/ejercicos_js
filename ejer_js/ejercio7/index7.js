function procesar(){

  let total = parseInt(document.getElementById('total').value)
  let juan = parseInt(document.getElementById('juan').value)
  let pedro = parseInt(document.getElementById('pedro').value)
  let maria = parseInt(document.getElementById('maria').value)
  const suma = juan+pedro+maria
  document.getElementById("total").value = suma
  parseInt(document.getElementById("toJuan").value = (juan*100)/suma )
  parseInt(document.getElementById("toPedro").value = (pedro*100)/suma )
  parseInt(document.getElementById("toMaria").value = (maria*100)/suma )
  setLocalStorage(suma)
}

arrayTotal = []

function setLocalStorage(total){
  arrayTotal.push(total)
  localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
  alert(`su total se guardo en la base de datos`)
  limpiador()
}
function limpiador(){
  document.getElementById('precio').value=0
 document.getElementById('descuento').value=0
}