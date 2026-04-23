const { calcularOperacao } = require('.javascript.js');

describe('Testes da Calculadora', () => {

    test('soma 2 + 3 = 5', () => {
        expect(calcularOperacao(2, 3, '+')).toBe(5);
    });

    test('subtração 5 - 2 = 3', () => {
        expect(calcularOperacao(5, 2, '-')).toBe(3);
    });

    test('multiplicação 4 * 3 = 12', () => {
        expect(calcularOperacao(4, 3, '*')).toBe(12);
    });

    test('divisão 10 / 2 = 5', () => {
        expect(calcularOperacao(10, 2, '/')).toBe(5);
    });

    test('divisão por zero', () => {
        expect(calcularOperacao(10, 0, '/')).toBe("Erro (Divisão por 0)");
    });

    test('soma com decimal', () => {
        expect(calcularOperacao(0.1, 0.2, '+')).toBeCloseTo(0.3);
    });

    test('multiplicação com número negativo', () => {
        expect(calcularOperacao(-2, 3, '*')).toBe(-6);
    });

    test('entrada inválida', () => {
        expect(() => calcularOperacao("a", 2, '+')).toThrow("Entrada inválida");
    });

    test('operação inválida', () => {
        expect(() => calcularOperacao(2, 2, '%')).toThrow("Operação inválida");
    });

});