function procesar(){
let juan = document.getElementById('juan').value
let pedro = document.getElementById('pedro').value
let maria = document.getElementById('maria').value  
let mayor = juan

if (pedro > mayor) {
    mayor = pedro;
}
if (maria > mayor) {
    mayor = maria;
}
alert("La edad mayor es " + mayor);
limpiador()
setLocalStorage(mayor)
}

arrayTotal = []

function setLocalStorage(mayor){
  arrayTotal.push(mayor)
  localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
  alert(`se guardo en la base de datos`)
  limpiador()
}
function limpiador(){
  document.getElementById('juan').value=0
 document.getElementById('pedro').value=0
 document.getElementById('maria').value=0
}