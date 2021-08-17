const sum = require('./sum');

describe ('sum', () => {
    it('soma de 4 mais 5 é igual a 9', () => {
        expect (sum(4,5)).toBe(9);
    });
    it('soma de 0 mais 0 é igual a 0', () => {
        expect (sum(0,0)).toBe(0);
    });
    it("sum lança um erro quando os parâmetros são 4 e '5'", () => {
        expect(() => {sum (4,'5')}).toThrow()
    });
    it("mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5')", () => {
        expect(() => {sum (4,'5')}).toThrowError(new Error('parameters must be numbers'));
    });

})