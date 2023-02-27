function procesar(){
let juan = document.getElementById('juan').value
let pedro = document.getElementById('pedro').value
let maria = document.getElementById('maria').value  


if(pedro,maria<juan){
    alert(`juan es mayor`)
}else if(maria,juan<pedro){
    alert(`pedro es mayor`)
}else if(juan,pedro<maria){
        alert(`maria es mayor`)
    }

//   let precio = document.getElementById('precio').value
//   let descuento = parseInt(document.getElementById('descuento').value)
//   alert(`su total a pagar es ${precio-(precio * descuento / 100)}`)
//   const totalDinero = precio-(precio * descuento / 100)
//   setLocalStorage(totalDinero)
}

// arrayTotal = []

// function setLocalStorage(precio){
//   arrayTotal.push(precio)
//   localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
//   alert(`El precio se guardo en la base de datos`)
//   limpiador()
// }
// function limpiador(){
//   document.getElementById('precio').value=0
//  document.getElementById('descuento').value=0
// }