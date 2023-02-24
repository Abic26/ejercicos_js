{function procesar1(){

    let dinero1 = document.getElementById('dinero1').value
    let dolar1  = (document.getElementById('dolar1').value)
    alert(` su total en dolares es ${(dinero1*dolar1)}`)   
    const total = dinero1*dolar1
    setLocalStorage(total)
}
function procesar2(){
    let dinero2 = document.getElementById('dinero2').value
    let dolar2  = parseInt(document.getElementById('dolar2').value)
    alert(` su total en dolares es ${parseInt(dinero2*dolar2)}`)
    const total = dinero2*dolar2
    setLocalStorage(total)
}}

arrayTotal = []

function setLocalStorage(total){
arrayTotal.push(total)
localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
alert(`su convercion de dinero se guardo`)
}