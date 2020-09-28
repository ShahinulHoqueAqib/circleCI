const sum = require('./sketch');

// test('adds 1 and 2 to equals 3', () =>
// {
//     expect(sum(1, 2)).toBe(3);
// })

test('adds 1 and 2 to equals 3', sumTest);

function sumTest()
{
    expect(sum(1, 2)).toBe(3);
};