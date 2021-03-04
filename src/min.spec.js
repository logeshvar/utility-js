const min = require('./min');

describe('Min', () => {

    
    it('Min of [1,2,3,4] is 1', () => {
        expect(min([1,2,3,4], Number.MAX_VALUE)).toEqual(1);
    });

})