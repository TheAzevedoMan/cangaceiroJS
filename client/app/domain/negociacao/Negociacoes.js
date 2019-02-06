class Negociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    toArray(){
        return [].concat(this._negociacoes);
    }

    get volumeTotal(){
        return this._negociacoes
            .reduce((total, negociacao) => 
                total + negociacao.volume ,0);
    }
}