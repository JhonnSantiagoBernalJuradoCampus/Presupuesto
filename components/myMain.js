export default{
    opcion: {
        ingreso: "Ingresos",
        egreso: "Egresos"
    },
    placeholder: "Agregar Descripción",
    placeholderValor: "Valor",
    submit: "Enviar",
    fragShow(){
        document.querySelector("#main").insertAdjacentHTML("beforeend", `
        <div class="d-flex justify-content-center align-items-center">
            <form id="form">
                <select name="select" id="select" class="form-select">
                    <option value="0">${this.opcion.ingreso}</option>
                    <option value="1">${this.opcion.egreso}</option>
                </select>  
                <input type="text" name="descripcion" placeholder="${this.placeholder}" class="form-control">
                <input type="number" name="valor" placeholder="${this.placeholderValor}" class="form-control">
                <button type="submit" class="btn bg-primary" value="guardar" id="submit">${this.submit}</button>
            </form>
        </div>
        `);
    }
}