export default{
    info: [
        {
            h3: "INGRESOS",
            p: { 
                dato: "Pago de campus",
                cantidad: "+ $4,500.000.00"
            }
        },
        {
            h3: "EGRESOS",
            p: {
                dato: "Luz",
                cantidad: "- $128,000.00"
            }
        }
    ],
    fragShow(){
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <div class="col-6">
                <h3 class="text-success pb-2">${this.info[0].h3}</h3>
                <div class="col-12">
                    <div class="container-fluid">
                        <div class="row">  
                            <div class="col-6">
                                <p>${this.info[0].p.dato}</p>
                            </div>
                            <div class="col-6 text-success">
                                <p>${this.info[0].p.cantidad}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <h3 class="text-danger pb-2">${this.info[1].h3}</h3>
                <div class="col-12">
                    <div class="container-fluid">
                        <div class="row">  
                            <div class="col-6">
                                <p>${this.info[1].p.dato}</p>
                            </div>
                            <div class="col-6 text-danger">
                                <p>${this.info[1].p.cantidad}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    }
}