class NegociacoesView extends View{

    
    template(model){
        return	`
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
            ${model.toArray().map(negociacao =>	
            	`
                <tr>
                    <td>${DateConverter.toString(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>																								
            `
).join('')}

        <tfoot>
        <td colspan="3"></td>
        <td>${model.volumeTotal}</td>
        </tfoot>															
        `


    }
}