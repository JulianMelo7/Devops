function calcular() {
    
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado = 0;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, digite números válidos!");
        return;
    }

    // Estrutura de decisão para a conta
    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            
            resultado = n2 !== 0 ? n1 / n2 : "Erro (Divisão por 0)";
            break;
    }

    // Exibindo na tela
    document.getElementById('resultado').innerText = resultado;
}