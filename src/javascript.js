function calcularOperacao(n1, n2, operacao) {
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error("Entrada inválida");
    }

    switch (operacao) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n2 !== 0 ? n1 / n2 : "Erro (Divisão por 0)";
        default:
            throw new Error("Operação inválida");
    }
}

function calcular() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;

    try {
        const resultado = calcularOperacao(n1, n2, operacao);
        document.getElementById('resultado').innerText = resultado;
    } catch (e) {
        alert(e.message);
    }
}


module.exports = { calcularOperacao };