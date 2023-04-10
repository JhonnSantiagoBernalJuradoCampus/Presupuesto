import myHeader from "./components/myHeader.js";
import myMain from "./components/myMain.js";
import myFooter from "./components/myFooter.js";

myHeader.fragShow();

myMain.fragShow();

myFooter.fragShow();

let formulario = document.querySelector("#form");
let dineroTotal = document.querySelector("#total");
let ingresos = 0;
let egresos = 0;

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();


    let descripcion = formulario.descripcion.value;
    let valor = Number(formulario.valor.value);
    let select = formulario.select.value;

    if(select == 0){
        ingresos += valor;
        document.querySelector("#infoIngresos").insertAdjacentHTML("beforeend", `
        <div class="col-6">
            <p>${formulario.descripcion.value}</p>
        </div>
        <div class="col-6 text-success">
            <p>+ $${formulario.valor.value}</p>
        </div>
        `)
    }
    else{
        egresos -= valor;
        document.querySelector("#infoEgresos").insertAdjacentHTML("beforeend", `
        <div class="col-6">
            <p>${formulario.descripcion.value}</p>
        </div>
        <div class="col-6 text-danger">
            <p>- $${formulario.valor.value}</p>
        </div>
        `)
    }
    
    let total = ingresos + egresos
    dineroTotal.innerHTML=`
    <h1 class="col-12 d-flex justify-content-center align-items-center" id="total">$${total}</h1>
    `;

    document.querySelector("#ingresos-1").innerHTML=`
    <p class="my-2 ms-4 me-2 px-5" id="ingresos-1">$${ingresos}</p>
    `;
    document.querySelector("#egresos-1").innerHTML=`
    <p class="my-2 ms-4 ps-5" id="egresos-1">$${Math.abs(egresos)}</p>
    `
    let porcentaje = (Math.abs(egresos)*100)/ingresos
    document.querySelector("#porcentaje").innerHTML=`
    <p class="my-2 ms-3" id="porcentaje">${porcentaje.toFixed(2)}%</p>
    `
    formulario.reset();
})

