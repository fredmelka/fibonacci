
const n = 100;
const _process = (fn) => {console.time(fn.name); fn(n); console.timeEnd(fn.name);};
// Fibonacci Computational Methods

const dynamicProgramming = (n) => {
    let [fib_i, fib_j] = [1n, 0n], i = 2;
    do {[fib_i, fib_j] = [fib_i + fib_j, fib_i];} while (n - (i++));
    return fib_i;
};

const squareExponentiation = (n) => {
    if (n <= 1) {return n;};
    let matrix = [[1n, 1n], [1n, 0n]]; let result = matrixPower(matrix, n - 1);
    return result[0][0];
};
let matrixPower = (matrix, power) => {
    if (power == 1) {return matrix;};
    if (power % 2 == 0) {let half = matrixPower(matrix, power / 2); return multiplyMatrices(half, half);};

    let half = matrixPower(matrix, Math.floor(power / 2)); let full = multiplyMatrices(half, half);
    return multiplyMatrices(full, matrix);
};
let multiplyMatrices = (matrixA, matrixB) => {
    let rows = matrixA.length; let cols = matrixA[0].length;
    let result = [[0n, 0n], [0n, 0n]];

    for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
    for (let i = 0; i < cols; i++) {
          result[row][col] += matrixA[row][i] * matrixB[i][col];
    };};};
    return result;
};

const doubleIdentityIterative = (n) => {
// Generalization to negative integers
if (n < 0) {return n % 2 == 0 ? -doubleIdentityIterative(-n) : doubleIdentityIterative(-n);};
// Initialization
let [fib_j, fib_i] = [1n, 0n], highBit = 1;
// Compute highestOneBit number in n (e.g. max power of 2 that is lower than n)
do {highBit <<= 1;} while (n - (highBit << 1) >= 0);
// Run Fibonacci Double Identity
for (let bit = highBit; bit != 0; bit >>>= 1) {
    [fib_j, fib_i] = [(fib_i * fib_i) + (fib_j * fib_j), fib_i * (fib_j * 2n - fib_i)];
    if ((n & bit) !=0) {[fib_j, fib_i] = [fib_j + fib_i, fib_j];};
};
return fib_i;
};

const recursiveIIFE = (n) =>
    (func => ((n) || (n % 2)) ? func(Math.abs(n))[0] : -func(Math.abs(n))[0])
    (function fib (n) {
        if (n == 0) {return [0n, 1n];};
        let [_n, _n1] = fib(n >> 1);
        let _2n = _n * (2n * _n1 - _n);
        let _2n1 = (_n * _n) + (_n1 * _n1);
        return n % 2 ? [_2n1, _2n + _2n1] : [_2n, _2n1];}
    );

_process(doubleIdentityIterative);