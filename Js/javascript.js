function saludar(){
    alert ("Hola");
}

let contador=0
let inputValue = document.getElementById("contador");
function sumarClick(){
    contador++
    console.log(`Hiciste ${contador} clicks`)

}

function resetearClick(){
   for (contador; contador>0; contador--){
   } 
   console.log(`Hay ${contador} clicks`)
}

function restarClick(){
    if(contador> 0) {
        contador--
        console.log(`Hay ${contador} clicks`)
    } else {
        console.log(`No se puede restar. Hay ${contador} clicks`)
    }
}

function contarClick(){ //NO ANDA. TIRA NULL
    contador = contador+inputValue
    alert(`Sumaste ${inputValue}. Ahora hay ${contador}`)
}

