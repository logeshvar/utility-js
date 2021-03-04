const map = require('./map');

describe('Map', () => {

    it('Map of [] Array for Cube is []',() => {
        expect(map([],'cube')).toEqual([]);
    });

    it('Map of [1,2,3] for Identity is [1,2,3]',() => {
        expect(map([1,2,3],'identity')).toEqual([1,2,3]);
    });

    it('Map of [1,2,3] for Cube is [1,8,27]',() => {
        expect(map([1,2,3],'cube')).toEqual([1,8,27]);
    });

    it('Map of Array with Object is [11]',() => {
        expect(map([{ x : 10}],a => a.x + 1)).toEqual([11]);
    });

})