function isFibonacciNumber(num) {
    if (num < 0)
        return "O número informado não pertence à sequência de Fibonacci.";
    let a = 0;
    let b = 1;
    if (num === a || num === b)
        return "O número informado pertence à sequência de Fibonacci.";
    while (b < num) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b === num
        ? "O número informado pertence à sequência de Fibonacci."
        : "O número informado não pertence à sequência de Fibonacci.";
}
// Exemplo de uso
const inputNumber = 21;
const result = isFibonacciNumber(inputNumber);
console.log(result);
