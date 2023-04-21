const { sum } = require("../utils/functions")

describe('Test Suite', () => {
    it('Should add two values and return sum', () => {
        const a = 5;
        const b = 2;
        const result = sum(a, b);
        expect(result).toBe(7);
    })
})