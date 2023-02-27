function procesar(){

  let diaTotal = document.getElementById("dia").value
  const lunes = 1
  const martes = 2
  const miercoles = 3
  const jueves = 4
  const viernes = 5
  const sabado = 6
  const domingo = 7

  if(lunes==diaTotal){
    alert("lunes")
  }else if(martes==diaTotal){
    alert("martes")
  }else if (miercoles==diaTotal){
    alert("miercoles")
  }else if (jueves==diaTotal){
    alert("jueves")
  }else if (viernes==diaTotal){
    alert("viernes")
  }else if (sabado==diaTotal){
    alert("sabado")
  }else if (domingo==diaTotal){
    alert("domingo")
  }else{
    alert("Error")
  }
  limpiador()

  setLocalStorage(diaTotal)
}

arrayTotal = []

function setLocalStorage(diaTotal){
  arrayTotal.push(diaTotal)
  localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
  alert(`se guardo en la base de datos`)
  limpiador()
}
function limpiador(){
  document.getElementById('dia').value=0

}