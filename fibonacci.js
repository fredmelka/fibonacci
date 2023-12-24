// Fibonacci Computational Methods
const n = 4321;

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

/* RECURSION Codewars solution plus own wrapper IIFE
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

// KARATSUBA ALGORITHM
function karatsuba (i,j) {
    const _t = 3500;
    const bitLength = (n) => {let a=1; while (n > 1n) {n>>=1n; a++;}; return a;};
    const decLength = (n) => 10**(`${n}`.length - 1);
    const split = (n, mask, half) => [n & mask, n >> half];

if (bitLength(i) < _t || bitLength(j) < _t) {return i * j;};

let m = Math.max(bitLength(i), bitLength(j)); let half = BigInt(~~((m+32)/(64*32))); let mask = (1n << half) - 1n;
let [iLow, iHigh] = split(i, mask, half); let [jLow, jHigh] = split(j, mask, half);

let z0 = karatsuba(iLow, jLow);
let z1 = karatsuba(iLow + iHigh, jLow + jHigh);
let z2 = karatsuba(iHigh, jHigh);
let zt = z1 - z0 - z2;

return (((z2 << half) + zt) << half) + z0;
};

let a = 3878968454388325633701916308325905312082127714646245106160597214895550139044037097010822916462210669479293452858882973813483102008954982940361430156911478938364216563944106910214505634133706558656238254656700712525929903854933813928836378347518908762970712033337052923107693008518093849801803847813996748881765554653788291644268912980384613778969021502293082475666346224923071883324803280375039130352903304505842701147635242270210934637699104006714174883298422891491273104054328753298044273676822977244987749874555691907703880637046832794811358973739993110106219308149018570815397854379195305617510761053075688783766033667355445258844886241619210553457493675897849027988234351023599844663934853256411952221859563060475364645470760330902420806382584929156452876291575759142343809142302917491088984155209854432486594079793571316841692868039545309545388698114665082066862897420639323438488465240988742395873801976993820317174208932265468879364002630797780058759129671389634214252579116872755600360311370547754724604639987588046985178408674382863125n;
let b = 347746739180370201052517440604335969788684934927843710657352239304121649686845967975636459392453053377493026875020744760145842401792378749321113719919618588095724485583919541019961884523908359133457357334538791778480910430756107407761555218113998374287548487n;
let c = 485409775275764654536265428969183569281608213780660999651617099738089903638781972806033862599713232510373035434629880553199196459675827742119360163981262807102364461180374815726706588069286146163410393943337633951717409607603218969528509177721043688922349803661626421291202826977493188948629450094680655819115112232371028198206248273200155453263418589716001986504843240465350277297063486151408858231051958778049980233636525344839399284868955248011205579196759020793534947614385921907786207482827337800385525374014643270581810937636963624173256075692341782813937784740795015773398988364351748631368407981374014873996218669892857414453285379657814724672087119103574935988688241221032956308093356392999862332122769087017393886530116269930675952077355788458302541361075982882744481038995640609635989739570512596048210323832053218355641363809791110265729490260416749021641947068047111888115388597263594829121n;

console.time('vanilla'); console.log(a * c); console.timeEnd('vanilla');
console.time('karatsuba'); console.log(karatsuba(a,c)); console.timeEnd('karatsuba')

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