function hexToDecimal(hex) {
    return parseInt(hex, 16);
}

function decimalToHex(dec) {
    return dec.toString(16).toUpperCase();
}

function validateInput(hex) {
    if (!/^[0-9A-F]{1,2}$/i.test(hex)) {
        throw new Error("Invalid hexadecimal input");
    }
}

function add(a, b) {
    validateInput(a);
    validateInput(b);
    return decimalToHex(hexToDecimal(a) + hexToDecimal(b));
}

function subtract(a, b) {
    validateInput(a);
    validateInput(b);
    const result = hexToDecimal(a) - hexToDecimal(b);
    if (result < 0) throw new Error("Negative result not allowed");
    return decimalToHex(result);
}

function multiply(a, b) {
    validateInput(a);
    validateInput(b);
    return decimalToHex(hexToDecimal(a) * hexToDecimal(b));
}

function divide(a, b) {
    validateInput(a);
    validateInput(b);
    if (hexToDecimal(b) === 0) throw new Error("Division by zero");
    return decimalToHex(Math.floor(hexToDecimal(a) / hexToDecimal(b)));
}

module.exports = { add, subtract, multiply, divide };