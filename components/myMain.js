export default{
    opcion: {
        defecto: "Seleccione una opcion",
        ingreso: "Ingresos",
        egreso: "Egresos"
    },
    placeholder: "Agregar Descripción",
    placeholderValor: "Valor",
    submit: "Enviar",
    fragShow(){
        document.querySelector("#main").insertAdjacentHTML("beforeend", `
        <div class="col-4">
            <select name="#" id="select" class="form-select">
                <option selected="true" disabled>${this.opcion.defecto}</option>
                <option>${this.opcion.ingreso}</option>
                <option>${this.opcion.egreso}</option>
            </select>  
        </div>
        <div class="col-4">
            <input type="text" placeholder="${this.placeholder}" class="form-control">
        </div>
        <div class="col-4">
            <div class="row">
                <div class="col-6">
                    <input type="text" placeholder="${this.placeholderValor}" class="form-control">
                </div>
                <div class="col-6">
                    <button type="submit" class="btn bg-primary">${this.submit}</button>
                </div>
            </div>
        </div>
        `)
    }
}