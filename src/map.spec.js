const map = require('./map');

describe('Map', () => {

    it('Map of Empty Array for Cube',() => {
        expect(map([],'cube')).toEqual([]);
    });

    it('Map of Array for Identity',() => {
        expect(map([1,2,3],'identity')).toEqual([1,2,3]);
    });

    it('Map of Array for Cube',() => {
        expect(map([1,2,3],'cube')).toEqual([1,8,27]);
    });

    it('Map of Array with Object',() => {
        expect(map([{ x : 10}],a => a.x + 1)).toEqual([11]);
    });

})