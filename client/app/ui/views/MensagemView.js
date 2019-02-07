class MensagemView{

    constructor(seletor){
        this._elemento = document.querySelector(seletor);
    }

    template(model){
        return `<p class="alert alert-info">${model.texto}</p>`
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}