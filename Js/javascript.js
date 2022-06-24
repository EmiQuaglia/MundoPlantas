// function saludar(){
//     alert ("Hola");
// }

// let contador=0
// const inputValue = document.getElementById("contador");
// const inputName = document.getElementById("entradanombre");
// const textElem = document.getElementById("valortexto");
// const infoMail = document.getElementById("mail");
// const textMail = document.getElementById("textMail");


// // inputName.addEventListener("input", mostrarNombre);
// infoMail.addEventListener("input", validarMail)




// function sumarClick(){
//     contador++
//     console.log(`Hiciste ${contador} clicks`)

// }

// function resetearClick(){
//    contador=0
//    console.log(`Hay ${contador} clicks`)
// }

// function restarClick(){
//     if(contador> 0) {
//         contador--
//         console.log(`Hay ${contador} clicks`)
//     } else {
//         console.log(`No se puede restar. Hay ${contador} clicks`)
//     }
// }

// function contarClick(){ 
    
//     contador = contador+Number(inputValue.value)
//     console.log(`Sumaste ${inputValue.value}. Ahora hay ${contador}`)
// }

// function mostrarNombre(){
//     textElem.innerHTML = inputName.value
// }

// function validarMail() {
//     let valueMail = infoMail.value
//     let lengthMail = valueMail.length

//     if (lengthMail <10) {
//         infoMail.classList.remove("bordegris", "bordeverde")
//         infoMail.classList.add("borderojo")
//         textMail.innerHTML= "Muy corto"
//     } else if (lengthMail>20){
//         infoMail.classList.remove("bordegris", "bordeverde")
//         infoMail.classList.add("borderojo")
//         textMail.innerHTML= "Muy largo"
//     } else {
//         infoMail.classList.remove("bordegris")
//         infoMail.classList.add("bordeverde")
//         textMail.innerHTML= "Ok, gracias"
//     }
// }

//DECLARACIONES
const textName = document.getElementById("name");
const alertName = document.getElementById("alertname");
const textAdress = document.getElementById("adress");
const alertAdress = document.getElementById("alertadress");
const textMail = document.getElementById("mail");
const alertMail = document.getElementById("alertmail");
const textCheckbox = document.getElementById("checkbox");
const alertCheckbox = document.getElementById("alertcheckbox");
const textInteres= document.getElementById("interes");
const alertInteres= document.getElementById("alertinteres");
const submit = document.getElementById("submit");
const alertSubmit= document.getElementById("alertsubmit");
let infoName= false;
let infoAdress=false;
let infoMail= false;
let infoCheckbox= false;
let infoInteres= false;
// const alertText= document.getElementsByClassName[0,1,2]("alerttext")
// const text= document.getElementsByClassName[0,1,2]("text")
//FUNCIONES
textName.addEventListener("input", validarName);
// textName.addEventListener("input", validarText);
textAdress.addEventListener("input", validarAdress);
textMail.addEventListener("input", validarMail);
textCheckbox.addEventListener("change", validarCheckbox);
textInteres.addEventListener("change", validarInteres);
submit.addEventListener("click",validarFormulario);

let valueName
function validarName(){
    valueName= textName.value;
    const caracteres = new RegExp('^[A-Z]+$', 'i')
    alertName.innerHTML=""
    if(!valueName){
        alertName.innerHTML="Ingrese un nombre"
        textName.classList.remove("borde", "bordeverde")
        textName.classList.add("borderojo")
        infoName=false;
    } else if (!caracteres.test(valueName)){
        alertName.innerHTML= "Sólo se permiten letras"
        textName.classList.remove("borde", "bordeverde")
        textName.classList.add("borderojo")
        infoName=false;
    } else {
        alertName.innerHTML=""
        textName.classList.remove("borde", "borderojo")
        textName.classList.add("bordeverde")
        infoName=true;
    }
}
let valueAdress
function validarAdress(){
    valueAdress= textAdress.value;
    const caracteres = new RegExp('^[A-Z]+$', 'i')
    alertName.innerHTML=""
    if(!valueAdress){
        alertAdress.innerHTML="Ingrese un apellido"
        textAdress.classList.remove("borde", "bordeverde")
        textAdress.classList.add("borderojo")
        infoAdress=false;
    } else if (!caracteres.test(valueAdress)){
        alertAdress.innerHTML= "Sólo se permiten letras"
        textAdress.classList.remove("borde", "bordeverde")
        textAdress.classList.add("borderojo")
        infoAdress=false;
    } else {
        infoAdress=true
        alertAdress.innerHTML=""
        textAdress.classList.remove("borde", "borderojo")
        textAdress.classList.add("bordeverde")
        infoAdress=true;
    }
}
let valueMail
function validarMail(){
    valueMail= textMail.value;
    const bodymail= new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    alertMail.innerHTML="";
    if(!valueMail){
        alertMail.innerHTML="Ingrese un mail"
        textMail.classList.remove("borde", "bordeverde")
        textMail.classList.add("borderojo")
        infoMail=false;
    } else if (!bodymail.test(valueMail)){
        alertMail.innerHTML= "El formato de mail es incorrecto"
        textMail.classList.remove("borde", "bordeverde")
        textMail.classList.add("borderojo")
        infoMail=false;
    } else {
        infoMail=true
        alertMail.innerHTML=""
        textMail.classList.remove("borde", "borderojo")
        textMail.classList.add("bordeverde")
        infoMail=true;
    }
}

function validarCheckbox(){
    infoCheckbox= textCheckbox.checked 
}

let valueInteres 
function validarInteres(event){
    valueInteres = event.target.value
    if (valueInteres === ""){
        alertInteres.innerHTML= "No seleccionaste ninguna opcion"
        infoInteres=false;
    } else {
        alertInteres.innerHTML= "Genial"
        infoInteres=true;
    }
}



function validarFormulario(){
    alertSubmit.innerHTML="Suscribite"
    if ((infoName) && (infoAdress) && (infoMail) && (infoInteres)){
        const user = {
            nombre : valueName,
            apellido : valueAdress,
            mail: valueMail,
            notificar: infoCheckbox,
            interes : valueInteres,
        }
        console.log(user)
        alertSubmit.innerHTML= "Tu suscripcion fue exitosa" 
    } else {
        alert("Completá todos los campos")
    }
}

// function validarText(){
//     let valueText= [textName.value, textAdress.value];
//     let infoText= false
//     const caracteres = new RegExp('^[A-Z]+$', 'i')
//     alertText.innerHTML=""
//     if(!valueText){
//         alertText.innerHTML="Ingrese un nombre"
//         text.classList.remove("borde", "bordeverde")
//         text.classList.add("borderojo")
//     } else if (!caracteres.test(valueName)){
//         alertName.innerHTML= "Sólo se permiten letras"
//         text.classList.remove("borde", "bordeverde")
//         text.classList.add("borderojo")
//     } else {
//         infoText=true
//         alertText.innerHTML=""
//         text.classList.remove("borde", "borderojo")
//         text.classList.add("bordeverde")
//     }
// }


