export default{
    info: [
        {
            h3: "INGRESOS"
        },
        {
            h3: "EGRESOS"
        }
    ],
    fragShow(){
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <div class="col-6">
                <h3 class="text-success pb-2">${this.info[0].h3}</h3>
                <div class="col-12">
                    <div class="container-fluid">
                        <div class="row" id="infoIngresos">  
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <h3 class="text-danger pb-2">${this.info[1].h3}</h3>
                <div class="col-12">
                    <div class="container-fluid">
                        <div class="row" id= "infoEgresos">  
                            
                        </div>
                    </div>
                </div>
            </div>
        `)
    }
}