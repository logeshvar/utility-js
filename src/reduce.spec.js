const reduce = require('./reduce');

describe('Reduce', () =>{

    it('Reduce [] Array is undefined', () => {
        expect(reduce([],(x,y) => x+y)).toEqual(undefined);
    });

    it('Reduce [] Array with initial value 10 is 10', () => {
        expect(reduce([],(x,y) => x+y,10)).toEqual(10);
    });

    it('Reduce Array [a,b,c] is abc', () => {
        expect(reduce(["a","b","c"],(x,y) => x+y)).toEqual("abc");
    });

    it('Reduce Array [a,b,c] with initail value z is zabc', () => {
        expect(reduce(["a","b","c"],(x,y) => x+y,"z")).toEqual("zabc");
    });
})