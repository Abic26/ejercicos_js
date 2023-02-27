function adivinarNumero() {

  const numeroAdivinar = 27
  let numeroIngresado = parseInt(document.getElementById("numero").value);
  if (numeroIngresado == numeroAdivinar) {
    alert("Adivinaste el número correcto");
  } else {
    alert("El número es incorrecto. Inténtalo de nuevo.");
  }
  setLocalStorage(numeroIngresado)
}

arrayTotal = []

function setLocalStorage(numeroIngresado){
  arrayTotal.push(numeroIngresado)
  localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
  alert(`su intento se guardo en la base de datos`)
  
}