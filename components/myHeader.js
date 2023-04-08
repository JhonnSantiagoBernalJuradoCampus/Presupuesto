export default{
    h2: "Presupuesto disponible",
    h1: "$0.00",
    ingresos: {
        mas: "INGRESOS",
        saldo: "$0.00"
    },
    egresos: {
        menos: "EGRESOS",
        saldo: "$0.00",
        porcentaje: "NaN%"
    },
    fragShow(){
        document.querySelector("#header").insertAdjacentHTML("beforeend", `
        <h2 class="col-12 d-flex justify-content-center align-items-center pb-2 fs-5">${this.h2}</h2>
        <h1 class="col-12 d-flex justify-content-center align-items-center">${this.h1}</h1>
        <div class="container-fluid pt-3">
            <div class="row mb-2 d-flex justify-content-center">
                <div class="col-12 d-flex justify-content-center align-items-center width bg-info">
                    <p class="my-2 me-2 pe-5">${this.ingresos.mas}</p>
                    <p class="my-2 ms-4 me-2 px-5">${this.ingresos.saldo}</p>
                </div>
            </div>
            <div class="row mb-4 d-flex justify-content-center">
                <div class="col-12 d-flex justify-content-center align-items-center width orange">
                    <p class="my-2 me-3 pe-5">${this.egresos.menos}</p>
                    <p class="my-2 ms-4 ps-5">${this.egresos.saldo}</p>
                    <p class="my-2 ms-3">${this.egresos.porcentaje}</p>
                </div>
            </div>
        </div>
        `)
    }
}