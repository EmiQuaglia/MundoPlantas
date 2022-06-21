function saludar(){
    alert ("Hola");
}

let contador=0
let inputValue

function sumarClick(){
    contador++
    console.log(`Hiciste ${contador} clicks`)

}

function resetearClick(){
   contador=0
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

function contarClick(){ 
    inputValue = document.getElementById("contador").value;
    contador = contador+Number(inputValue)
    console.log(`Sumaste ${inputValue}. Ahora hay ${contador}`)
}

