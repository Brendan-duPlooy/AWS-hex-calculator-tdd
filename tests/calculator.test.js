const { add, subtract, multiply, divide } = require('../src/calculator');

test('Addition of hex numbers', () => {
    expect(add('A', '1')).toBe('B');
});

test('Subtraction of hex numbers', () => {
    expect(subtract('A', '1')).toBe('9');
});

test('Multiplication of hex numbers', () => {
    expect(multiply('A', '2')).toBe('14');
});

test('Division of hex numbers', () => {
    expect(divide('A', '2')).toBe('5');
});

test('Division by zero should throw error', () => {
    expect(() => divide('A', '0')).toThrow();
});