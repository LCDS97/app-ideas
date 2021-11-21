/* 

Etapas para calculadora

1 - Fazer cada botão coletar seu valor devido - OK
2 - Adicionar valores ao result em um array a partir do click - OK
3 - Separar valor do result a partir do momento que clica em algum operador -ok 
- Definir o que operador vai fazer com o array em relação as contas
- Adicionar calculo em relação ao botão selecionado;
- Calculo resultado;
 parabens luquinhas! :)
// Refatorar
Colocar as variaveis utilizados mais de uma vez globalmente

*/

const numbers = [];
const calculus = [];

const calculusEl = document.querySelector('#calculus');


const calculate = (op) => {
  const filterNumbers = calculus.map((c) => Number(c)).filter((c) => !Number.isNaN(c));
  const operators = {
      divider: () => 
  }

  console.log(calculus); 
  calculusEl.innerHTML = filterNumbers.join(' ');
}

const getOperators = () => {
    const operators = {
        divider: document.querySelector('#divider'),
        multiplier: document.querySelector('#multiplier'),
        minus: document.querySelector('#minus'),
        plus: document.querySelector('#plus')
    };
    const result = document.querySelector('#result');

    Object.values(operators).forEach((operator) => {
        operator.addEventListener('click', () => {
            calculus.push(result.innerHTML);
            result.innerHTML = 0;
            numbers.length = 0;
            calculate(operator.innerHTML);
            // calculusEl.innerHTML = calculus.join(' ');
            console.log(numbers);
        });
    })    

}

const clearAllNumbers = () => {
    const btnClearAll = document.querySelector('#clear-all');
    const inputResult = document.querySelector('#result')

    btnClearAll.addEventListener('click', () => {
        numbers.length = 0;
        calculus.length = 0;
        inputResult.innerHTML = 0;
        calculusEl.innerHTML = '';
    });
}
const clearNumber = () => {
    const btnClear = document.querySelector('#clear');
    const inputResult = document.querySelector('#result');

    btnClear.addEventListener('click', () => {
        numbers.pop();
        inputResult.innerHTML = numbers.join('').length === 0 ? 0 : numbers.join('');
    });
}

const getButtonValue = () => {
    const elements = document.querySelectorAll('.numbers');
    const inputResult = document.querySelector('#result');
    
    const btns = [...elements];
    btns.forEach((btn) =>  {
        btn.addEventListener('click', () => {
            numbers.push(btn.innerHTML);
            inputResult.innerHTML = numbers.join('')
        })
    })
    
};

window.onload = () => {
    getButtonValue();
    getOperators();
    clearNumber();
    clearAllNumbers();
};