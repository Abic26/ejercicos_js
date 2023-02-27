function procesar1(){

    let gradosCent1 = (document.getElementById('gradosCent1').value)
    let gradosFaren1  = (document.getElementById('gradosFaren1').value)
    alert(` su total en grados celsius es ${(gradosCent1-32)*5/9} grados`)   
    const temperatura = (gradosCent1-32)*5/9
    setLocalStorage(temperatura)
}
function procesar2(){

    let gradosCent2 = (document.getElementById('gradosCent2').value)
    let gradosFaren2  = (document.getElementById('gradosFaren2').value)
    alert(` su total en grados farenheit es ${(gradosFaren2*9/5)+32} grados`)
    const temperatura = (gradosFaren2*9/5)+32
    setLocalStorage(temperatura)
       
    }


arrayTotal = []

function setLocalStorage(temperatura){
arrayTotal.push(temperatura)
localStorage.setItem("arrayTotal",JSON.stringify(arrayTotal))
alert(`la temperatura actual se guardo`)
}