/* 

Etapas para calculadora

1 - Fazer cada botão coletar seu valor devido - OK
2 - Adicionar valores ao result em um array a partir do click - OK
3 - Separar valor do result a partir do momento que clica em algum operador
4 - Adicionar calculo em relação ao botão selecionado;
5 - Calculo resultado;

*/

result = []

function getInputValue(val){
    let valor = val.value
    result.push(valor)
    console.log(result)
    
}
