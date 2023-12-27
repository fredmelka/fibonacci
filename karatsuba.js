
const machine = (i, j) => i * j;

const gradeSchool = (i, j) => {

i = i.toString(); j = j.toString(); let iSize = i.length - 1, jSize = j.length - 1;
let output = new Uint8Array(iSize + jSize + 2).fill(0);
    
for (let s = jSize; s >= 0; s--) {
    let carry = 0;
    for (let l = iSize; l >= 0; l--) {
        let localProduct = j[s] * i[l] + output[s + l + 1] + carry;
        output[s + l + 1] = localProduct % 10;
        carry = ~~(localProduct / 10);
    };
    output[s] += carry;
};
return BigInt(output.join(''));
};

const karatsubaDecimal = (i, j) => {
    const _exit = 10n ** 150n; // Adjustable factor
    const useSplit = (n) => [~~(n / (10n ** power)), n % (10n ** power)];

if (i < _exit || j < _exit) {return i * j;};

let m = Math.max(`${i}`.length, `${j}`.length); let power = BigInt(~~(m / 2));
let [a, b] = useSplit(i); let [c, d] = useSplit(j);

let z0 = karatsubaDecimal(b, d);
let z1 = karatsubaDecimal(a + b, c + d);
let z2 = karatsubaDecimal(a, c);

return (z2 * 10n**(2n * power)) + ((z1 - z2 - z0) * 10n**(power)) + z0;
};

const karatsubaBinary = (i, j) => {
    const _exit = 500; // Power trigger to fall back (~ 1e150)
    const bitLength = (n) => {let a = 1; while (n > 1n) {n >>= 1n; a++;}; return a;};
    const useSplit = (n) => [n >> power, n & ((1n << power) - 1n)];

let [iBit, jBit] =  [bitLength(i), bitLength(j)];

if (iBit < _exit || jBit < _exit) {return i * j;};

let n = Math.max(iBit, jBit); let power = BigInt(~~(n / 2));
let [a, b] = useSplit(i); let [c, d] = useSplit(j); 

let z0 = karatsubaBinary(b, d);
let z1 = karatsubaBinary(a + b, c + d);
let z2 = karatsubaBinary(a, c);

return (((z2 << power) + (z1 - z2 - z0)) << power) + z0; 
};

// Computations
const n = 10000;
const _generate = (n) => {let int=''; do {int += ~~(Math.random() * 10)} while (--n); return BigInt(int)};
const _multiplication = (fn) => {console.time(fn.name); fn(i, j); console.timeEnd(fn.name);};

let [i, j] = [_generate(n), _generate(n)];

_multiplication(machine);
_multiplication(gradeSchool);
_multiplication(karatsubaDecimal);
_multiplication(karatsubaBinary);