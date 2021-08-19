const random = require('./randomnumber')

test('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    random.randomNumber = jest.fn().mockReturnValue(10);

    expect(random.randomNumber()).toBe(10);
    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    random.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(random.randomNumber(10,2)).toBe(5);
    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber).toHaveBeenCalledWith(10, 2);
});

describe("testando implementações", () => {
it("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    random.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(random.randomNumber(1, 2, 3)).toBe(6);
    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber).toHaveBeenCalledWith(1, 2, 3);

});
it('mockando função que recebe um parâmetro e retorna seu dobro', () => {
    random.randomNumber.mockReset();

    expect(random.randomNumber).toHaveBeenCalledTimes(0);

    random.randomNumber = jest.fn().mockImplementation(a => a * 2);

    expect(random.randomNumber(5)).toBe(10);
    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber).toHaveBeenCalledWith(5);

})

});
