function inverterString(input) {
    let invertida = "";
    for (let i = input.length - 1; i >= 0; i--) {
        invertida += input[i];
    }
    return invertida;
}
// Exemplo de uso
const stringOriginal = "exemplo";
const stringInvertida = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
