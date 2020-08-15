// testa a forma diferente e testando a propriedade eval

let valor;
let resultado;
function botao(num){
    valor= document.calc.visor.value += num;
} 

function resete(){
    document.calc.visor.value = ''; // UM jeito simplificado
}
function calcular(){
    resultado = eval(valor); // eval é bem melhor para usar em calculos
    document.calc.visor.value = resultado;
}


