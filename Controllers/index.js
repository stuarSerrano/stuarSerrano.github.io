import { loginvalidation, servicegoogle } from "./global.js";

const iniciar = document.getElementById('btnlogin')
const googlebtn= document.getElementById('btngoogle')

async function Validar(){
    const user = document.getElementById('emailuser').value
    const pass = document.getElementById('pwsuser').value

    const sesion = loginvalidation(user,pass)
    const validation = await sesion   
    
    .then((validation) => {
        alert("The user: "+user+" is successfull")
        window.location.href= "../Templates/registro_unico.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("The user: "+user+" no validation "+errorMessage)
    });
}

async function google(){
    window.location.href= "../Templates/base.html"
}

window.addEventListener('DOMContentLoaded', async()=>
{
    iniciar.addEventListener('click',Validar);
    googlebtn.addEventListener('click',google)
})