function procesar(){

    let total = document.getElementById('total').value
    let suma1 = parseInt(document.getElementById('suma1').value)
    let suma2 = parseInt(document.getElementById('suma2').value)
    let suma3 = parseInt(document.getElementById('suma3').value)
    const sTotal = suma1+suma2+suma3
    alert(`su total es ${suma1+suma2+suma3}`)
    // alert(` la suma de los 3 numero es igual a ${total} esto es ${(suma1+suma2+suma3)==total}`)
 if(sTotal==total){
    alert(`la suma de los tres numero es igual al total`)
 }else{
    alert(`Error en la suma`)
}

if(sTotal<total){
    alert(`le hace falta sumarle ${total-sTotal}`)
}else{
    alert(`le hace falta restarle ${sTotal-total}`)
}
setLocalStorage(sTotal)

}

arrayTotal = []

  
function setLocalStorage(sTotal){
    arrayTotal.push(sTotal)
    localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))

    
}