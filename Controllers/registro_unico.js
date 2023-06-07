import { adduser,readuser }from "./global.js"

const caja = document.getElementById('freg')
const btn = document.getElementById('btnsearch')
const mostrar = document.getElementById('container1')

async function buscar(){
    const ced = document.getElementById('inputcodigo').value

    const docRef = readuser(ced)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let html=""
        html=`
        <div class="card" style="width: 18rem;">
            <img src="${docSnap.data().imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${docSnap.data().nombre}</h5>
                <p class="card-text">${docSnap.data().codigo}</p>
                <p class="card-text">${docSnap.data().direction}</p>
                <p class="card-text">${docSnap.data().stock}</p>
                <h7>${docSnap.data().cel}</h7>
            </div>
        </div>
        `
        mostrar.innerHTML=html
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
}

window.addEventListener('DOMContentLoaded',async()=>{
    btn.addEventListener('click',buscar)
} )

caja.addEventListener('submit',(e)=>{
    e.preventDefault()

    const codigo = caja['txtcodigo']
    const name = caja['txtinst']
    const dir = caja['txtdir']
    const phone = caja['txtphone']
    const stock = caja['txtstock']
    const img = caja['response']

    adduser(
        codigo.value,
        name.value,
        dir.value,
        phone.value,
        stock.value,
        img.value)

    alert('El usuario '+codigo.value+' ha sido registrado')

})