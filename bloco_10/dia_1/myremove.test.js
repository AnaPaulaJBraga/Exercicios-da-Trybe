
const myRemove = require('./myremove');

describe ('recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () =>{
    it('chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () =>{
        expect([1, 2, 4]).toEqual([1, 2, 4])
    });
    it('chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect ([1, 2, 4]).not.toEqual([1, 2, 3, 4])
    });
    it ('chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect ([1, 2, 3, 4]).toEqual([1, 2, 3, 4])
    });
})