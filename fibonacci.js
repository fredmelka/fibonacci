// Fibonacci Computational Methods
const n = 1000000;

/* DYNAMIC PROGRAMMING
const dynamic = (n) => {
    let fib_i = 1n, fib_j = 0n, i = 2;
    do {[fib_i, fib_j] = [fib_i + fib_j, fib_i];} while (n - (i++));
    return fib_i;
};
console.time('Dynamic'); let test = dynamic(n); console.log(test); console.timeEnd('Dynamic');*/

/* MATRIX EXPONENTIATION by squaring method
const matrix = (n) => {
    if (n <= 1) {return n;};
    let matrix = [[1n, 1n], [1n, 0n]];
    let result = matrixPower(matrix, n - 1);
    return result[0][0];
};
const matrixPower = (matrix, power) => {
    if (power == 1) {return matrix;};
    if (power % 2 == 0) {let half = matrixPower(matrix, power / 2); return multiplyMatrices(half, half);};

    let half = matrixPower(matrix, Math.floor(power / 2)); let full = multiplyMatrices(half, half);
    return multiplyMatrices(full, matrix);
};
const multiplyMatrices = (matrixA, matrixB) => {
    let rows = matrixA.length; let cols = matrixA[0].length;
    let result = [[0n, 0n], [0n, 0n]];

    for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
    for (let i = 0; i < cols; i++) {
          result[row][col] += matrixA[row][i] * matrixB[i][col];
    };};};
    return result;
};
console.time('Matrix Exponentiation'); console.log(matrix(n)); console.timeEnd('Matrix Exponentiation');*/

/* FAST DOUBLE ITERATIVE method using mathematical identities 
const fib = (n) => {
// Generalization to negative integers
if (n < 0) {return n % 2 == 0 ? -fib(-n) : fib(-n);};
// Initialization
let fib_j = 1n, fib_i = 0n, highBit = 1;
// Compute highestOneBit number in n (e.g. max power of 2 that is lower than n)
do {highBit <<= 1;} while (n - (highBit << 1) >= 0);
// Run Fibonacci Doubled Identity
for (let bit = highBit; bit != 0; bit >>>= 1) {
    [fib_j, fib_i] = [(fib_i * fib_i) + (fib_j * fib_j), fib_i * (fib_j * 2n - fib_i)];
    if ((n & bit) !=0) {[fib_j, fib_i] = [fib_j + fib_i, fib_j];};
};
return fib_i;
};
console.time('Fast Iterative'); console.log(fib(n)); console.timeEnd('Fast Iterative');*/

/* Codewars RECURSION with Wrapper IIFE
const recursion = (n) => {
    const fib = (n) => {
        if (n == 0) {return [0n, 1n];};
        let [_n, _n1] = fib(n >> 1);
        let _2n = _n * (2n * _n1 - _n);
        let _2n1 = (_n * _n) + (_n1 * _n1);
        return n % 2 ? [_2n1, _2n + _2n1] : [_2n, _2n1];
    };
return ((n) || (n % 2)) ? fib(Math.abs(n))[0] : -fib(Math.abs(n))[0];
};
console.time('Codewars Recursive'); console.log(recursion(n)); console.timeEnd('Codewars Recursive');*/

/* KARATSUBA ALGORITHM
const karatsuba = (i,j) => {
    const _t = 1e12;
    const bitLength = (n) => {let a=1; while (n > 1n) {n>>=1n; a++;}; return a;};
    const decLength = (n) => `${n}`.length;
    const split = (n, cut) => [Math.floor(n / cut), n % cut];

if (i < _t || j < _t) {return i * j;};

let m = Math.max(decLength(i), decLength(j)); let m2 = ~~(m/2);
let [iLow, iHigh] = split(i, m2); let [jLow, jHigh] = split(j, m2);

let z0 = karatsuba(iLow, jLow);
let z1 = karatsuba(iLow + iHigh, jLow + jHigh);
let z2 = karatsuba(iHigh, jHigh);

return (z2 * 10**(m2*2)) + ((z1 - z2 - z0) * 10**(m2)) + z0;
};*/

/* READINGS
https://www.nayuki.io/page/fast-fibonacci-algorithms
https://www.nayuki.io/page/karatsuba-multiplication
https://www.nayuki.io/category/programming
https://www.nayuki.io/
https://en.wikipedia.org/wiki/Fibonacci_sequence
https://en.wikipedia.org/wiki/Karatsuba_algorithm
https://en.wikipedia.org/wiki/Exponentiation_by_squaring
https://robwilsondev.medium.com/bigo-and-beyond-how-to-compute-fibonacci-sequence-efficiently-with-matrix-exponentiation-d9924545fe54
https://medium.com/codex/bit-manipulation-in-javascript-117cd525e4d
https://www.codecademy.com/resources/docs/javascript/bitwise-operators
https://blog.logrocket.com/guide-javascript-bitwise-operators/
*/