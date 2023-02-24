function procesar(){

    let total = document.getElementById('total').value
    let efectivo = parseInt(document.getElementById('efectivo').value)
    let descuento = total-(total*0.10)
    alert(`su total a pagar es ${total}`)
    
       
  

  if(total >= 50000){
    alert(`tendra un descuento de 10% su total a pagar es ${descuento}`)
  }else{
        alert(`no tiene descuento`)
    }

    if(efectivo>total){
        alert(`su cambio es ${efectivo-total}`)
    }else{
        alert(`le hace falta ${total-efectivo}`)
    }
 
    setLocalStorage(total)
}
 

arrayTotal = []

  
function setLocalStorage(total){
    arrayTotal.push(total)
    localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
    limpiador()
}
function limpiador(){
    document.getElementById('precio').value=0
   document.getElementById('descuento').value=0
}