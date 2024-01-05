### _Fibonacci sequence_

The repository is about shooting large occurences of the **Fibonacci numbers** ([A000045](https://oeis.org/A000045)). The sequence is often a good pretext for exciting journeys to the heart of computer science and a means for illustrating programming patterns. Recall the sequence $F_{n}$ is defined by the **recurrence relation**:

$$ F_{0}=0, \quad F_{1}=1, \quad n\in \mathbb{N}^{+}, n\gt 1 \to F_{n} = F_{n-1} + F_{n-2} $$

[Fibonacci sequence wikipedia](https://en.wikipedia.org/wiki/Fibonacci_sequence)

<details>
<summary>Negafibonacci</summary>

Using $F_{n-2} = F_{n} - F_{n-1}$, one can extend the sequence to the relative integers set $\mathbb{Z}$:

$$F_{-n} = \big( -1\big) ^{n+1} \times F_{n}$$

$\quad \quad {\color{red}\dots}, {\color{green}28657}, {\color{red}-17711}, {\color{green}10946}, {\color{red}-6765}, {\color{green}4181}, {\color{red}-2584}, {\color{green}1597}, {\color{red}-987}, {\color{green}610},$ <br/>
$\quad \quad {\color{red}-377}, {\color{green}233}, {\color{red}-144}, {\color{green}89}, {\color{red}-55}, {\color{green}34}, {\color{red}-21}, {\color{green}13}, {\color{red}-8}, {\color{green}5}, {\color{red}-3}, {\color{green}2}, {\color{red}-1},$ <br/>
$\quad \quad 0, {\color{green}1,1,2,3,5,8,13,21,34,55,89,144,233,610,987,1597,2584,4181,\dots}$ <br/>
$\quad \quad {\color{green},573147844013817084101_{101},\dots, 638817435613190341905763972389505493_{173},\dots}$
</details>

<details>
<summary>Machine code</summary>

Hexadecimal representation of a `x86-64` [machine code](https://en.wikipedia.org/wiki/Low-level_programming_language) function that calculates the $n^{th}$ Fibonacci number, with each line corresponding to one instruction:

```javascript
89 f8
85 ff
74 26
83 ff 02
76 1c
89 f9
ba 01 00 00 00
be 01 00 00 00
8d 04 16
83 f9 02
74 0d
89 d6
ff c9
89 c2
eb f0
b8 01 00 00
c3
```
</details>

<details>
<summary>Assembly code</summary>

Same Fibonacci calculator, but in `x86-64` assembly language using `AT&T` syntax:

```assembly_x86
fib:
        movl %edi, %eax        ; put the argument into %eax
        testl %edi, %edi       ; is it zero?
        je .return_from_fib    ; yes - return 0, which is already in %eax
        cmpl $2, %edi          ; is 2 greater than or equal to it?
        jbe .return_1_from_fib ; yes (i.e., it's 1 or 2) - return 1
        movl %edi, %ecx        ; no - put it in %ecx, for use as a counter
        movl $1, %edx          ; the previous number in the sequence, which starts out as 1
        movl $1, %esi          ; the number before that, which also starts out as 1
.fib_loop:
        leal (%rsi,%rdx), %eax ; put the sum of the previous two numbers into %eax
        cmpl $2, %ecx          ; is the counter 2?
        je .return_from_fib    ; yes - %eax contains the result
        movl %edx, %esi        ; make the previous number the number before the previous one
        decl %ecx              ; decrement the counter
        movl %eax, %edx        ; make the current number the previous number
        jmp .fib_loop          ; keep going
.return_1_from_fib:
        movl $1, %eax          ; set the return value to 1
.return_from_fib:
        ret                    ; return
```
</details>

### Golden ratio

Fibonacci numbers are strongly related to the **Golden ratio**. The figure is a captivating journey through art and architecture, botany and biology, physics and, of course, mathematics. It was called by _Euclid_ **extreme and mean ratio** and **divine proportion** by _Luca Pacioli_.

 **Euclid**'s **Elements** book (_~300b.c._) provides several propositions along with their proofs involving the golden ratio and contains its first known definition which proceeds as follows:

> **Elements / Liber VI / Definition 3**
>
> Ακρον καὶ μέσον λόγον εὐθεῖα τετμῆσθαι λέγεται, ὅταν ᾖ ὡς ἡ ὅλη πρὸς τὸ μεῖζον τμῆμα, οὕτως τὸ μεῖζον πρὸς τὸ ἔλαττὸν.
>
> > _A straight line is said to have been cut in extreme and mean ratio when, as the whole line is to the greater segment, so is the greater to the lesser._

The eleventh proposition of second book offers a construction of the golden ratio : [Liber II - Proposition 11](https://www.youtube.com/watch?v=kIGG1bdSLN4).

The **Elements**, written in thirteen books (i.e. chapters) is the most famous and scientifically most significant work by the Greek mathematician Euclid. After the Bible, it is the most printed and studied book in the history of the western world. It represents geometry as a logically self-​contained system built on a **handful of definitions, postulates and axioms**. Besides geometry grounds, it contains everything known at that time about number theory. Here too there were for the first time important findings on prime numbers.

As famous problem from his book **Liber abaci** shows, **Fibonacci** was familiar – in Euclid's tradition – with the concept of proportion in accordance with what was first termed golden ratio only in the $19^{th}$ century. However Fibonacci did not make any connection between the quotient and the sequence of numbers that he found with the **rabbit problem**.

**Calculation**

Algebraically, two quantities $a$ and $b$ with $a\gt b\gt 0$ are said in the **golden ratio** $\varphi$ if their ratio is the same as the ratio of their sum to the larger of the two quantities.

$$\cfrac{a+b}{a} = \cfrac{a}{b} = \varphi$$

One method for finding a closed form for $\varphi$ starts from the left fraction.

$$\cfrac{a+b}{a} = 1 + \cfrac{b}{a} = 1 + \cfrac{1}{\varphi} = \varphi \iff \varphi^{2} - \varphi - 1 = 0$$

Solving the quadratic equation yields to two real solutions. Since $\varphi$ connects together two positive quantities, the positive _root_ is necessarily the golden ratio:

$${\color{navy}\varphi = \cfrac{1 + \sqrt{5}}{2} \sim 1.6180339887} \quad \mid \quad \varphi' = \cfrac{1 - \sqrt{5}}{2} = - \cfrac{1}{\varphi}$$

**Illustrations**

| Quantities | Pentagram | Triangle |
|:---:|:---:|:---:|
| ![Quantities](./img/phi.png) | ![Pentagram](./img/pentagram.png) | ![Triangle](./img/triangle.png) |
| The whole is the longer part plus the shorter part. The whole is to the longer part as the longer part is to the shorter part. | A pentagram colored to distinguish its line segments of different lengths. The four lengths are in golden ratio to one another. | A golden triangle ABC can be subdivided by an angle bisector into a smaller golden triangle CXB and a golden gnomon XAC. |

### Expressions

There are several methods for computing the value of a given $n^{th}$ term of Fibonacci sequence.

**Closed-form formula**

Here the expression of one $n^{th}$ term is not a function of some previous terms. Like every sequence defined by a _linear recurrence with constant coefficients_, the Fibonacci sequence has got a closed-form expression. It has become known as **Binet's formula**, named after the French mathematician, though it was already known by _de Moivre_ (1718) and _Euler_ (1765):

$$F_{n} = \cfrac{1}{\sqrt{5}} \Big( \varphi^{n} - \varphi'^{n} \Big) = \cfrac{1}{\sqrt{5}} \Big[ \Big( \cfrac{1 + \sqrt{5}}{2} \Big)^{n} - \Big( \cfrac{1 - \sqrt{5}}{2} \Big)^{n} \Big]$$

One can quickly notice that the second term's absolute value is always less than $0.5$ for all $n\ge 0$, and more, it decreases exponentially. Hence, we could compute $F_{n}$ by **rounding**, using the _nearest integer function_:

$$\forall n\in \mathbb{N}^{+} \to F_{n} = \Big\lfloor \cfrac{\varphi^{n}}{\sqrt{5}} \Big\rceil$$

Though the golden ratio $\varphi$ and its conjugate $\varphi'$ constitute an irrational pair of numbers, (each offsets other's infinity), yet the expression result is an integer number.

**Matrix form**

The _2-dimensional_ system of linear difference equations that describes the Fibonacci sequence is:

$$  (a) \quad
    \overrightarrow {F_{n}} =
    \begin{bmatrix}
    F_{n} \\
    F_{n-1}
    \end{bmatrix}
    =
    \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix}
    \begin{bmatrix}
    F_{n-1} \\
    F_{n-2}
    \end{bmatrix} 
    \implies (b)
    {\color{navy}
    \quad
    \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix} ^{n}
    =
    \begin{bmatrix}
    F_{n+1} & F_{n} \\
    F_{n} & F_{n-1}
    \end{bmatrix}} $$

The second _innocent-looking_ **matrix exponentiation** identity can be proven from weak
_induction_ as follows:

- **Base case** for $n=1$, clearly:

$$ \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix} ^{1}
    =
    \begin{bmatrix}
    F_{2} & F_{1} \\
    F_{1} & F_{0}
    \end{bmatrix} $$

- **Induction step**, assume for $n\gt 1$:

$$  \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix} ^{n}
    =
    \begin{bmatrix}
    F_{n+1} & F_{n} \\
    F_{n} & F_{n-1}
    \end{bmatrix} $$
    
Then, one can induce the equation remains verified for $(n+1)$ since:

$$  \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix} ^{n+1}
    = 
    \begin{bmatrix}
    F_{n+1} & F_{n} \\
    F_{n} & F_{n-1}
    \end{bmatrix}
    \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix}
    =
    \begin{bmatrix}
    F_{n+1}+F_{n} & F_{n+1}+0 \\
    F_{n}+F_{n-1} & F_{n}+0
    \end{bmatrix}
    =
    \begin{bmatrix}
    F_{n+2} & F_{n+1} \\
    F_{n+1} & F_{n}
    \end{bmatrix} 
    =
    \begin{bmatrix}
    F_{(n+1)+1} & F_{(n+1)} \\
    F_{(n+1)} & F_{(n+1)-1}
    \end{bmatrix} $$

**Double identities**

The sequence has remarkable properties whom studies are the subject of regular publications. Three following equations are derived by applying $2n$ to the above matrix expression, like so:

$$  \begin{bmatrix}
    {\color{green}F_{(2n)+1}} & {\color{blue}F_{(2n)}} \\
    {\color{blue}F_{(2n)}} & {\color{red}F_{(2n)-1}}
    \end{bmatrix}
    =
    \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix} ^{(2n)}
    =
    \bigg[ \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix}^{n} \bigg] ^{2}
    =
    \begin{bmatrix}
    F_{n+1} & F_{n} \\
    F_{n} & F_{n-1}
    \end{bmatrix}^{2}
    =
    \begin{bmatrix}
    {\color{green}F_{n+1}^{2}+F_{n}^{2}} & {\color{blue}F_{n+1}\text{ }F_{n}+F_{n}\text{ }F_{n-1}} \\
    {\color{blue}F_{n}\text{ }F_{n+1}+F_{n-1}\text{ }F_{n}} & {\color{red}F_{n}^{2}+F_{n-1}^{2}}
    \end{bmatrix} $$

By equating each respective cell of the first and last terms, some _identities_ are deduced directly or via the sustitution:

$$ F(2n)=F_{n} \big( F_{n+1} + F_{n-1} \big)= F_{n} \big( F_{n+1} + \big(F_{n+1} - F_{n}\big) \big) = F_{n} \big( 2 \times F_{n+1} - F_{n}\big) $$

Therefore,

$${\color{green} (i) \to F_{2n-1} = F_{n}^{2} + F_{n-1}^{2}} \quad {\color{blue}(ii) \to F_{2n} = F_{n} \times \Big[2\times F_{n+1} - F_{n}\Big]} \quad {\color{red}(iii) \to F_{2n+1} = F_{n+1}^{2} + F_{n}^{2}}$$

Other notable properties

- Cassini's identity is $F_{n-1}F_{n+1} - F_{n}^{2} = (-1)^{n}$
- Addition rule is $F_{n+p} = F_{p}F_{n+1} + F_{p-1}F_{n} = F_{n}F_{p+1} + F_{n-1}F_{p}$
- Greatest common denominator (_gcd_) identity is $gcd(F_{n}, F_{p}) = F_{gcd(n,p)}$

<details>
<summary>Matrix multiplication</summary>

This binary operation is central tool of linear algebra and has numerous applications in applied mathematics, statistics, physics, economics and engineering.

| Multiplicity | Operations |
|:---:|:---:|
| ![Multiplicity](./img/multiplicity.png) | ![Operation](./img/product.png) |
| The number of columns in the first matrix must be equal to the number of rows in the second. The result matrix has the number of rows of the first and the number of columns of the second matrix. | The figure above illustrates diagrammatically the product of two matrices **A** and **B**, showing how each intersection in the product matrix is equal to the **sumproduct** of the correspondings row in **A** and column in **B**. |
</details>

### Algorithms

Keep in mind that a computer performs operations at same speed regardless of the source code or instructions given. It just depends on hardware specifications. It turns out the performance of one method stems from the efficiency of the set of instructions to get as close as possible to the computing power and to run the _straightest through the process_ to achieve the desired result. In other words, the processor does not care how clever or redundant its instructions are, it will execute at the same rate. The outperformance of one algorithm over another arises solely from human reasoning, considered as intelligence, and in regards with the current context.

**Textbook recursive**

Naively, one can execute directly the recurrence formula as Fibonacci sequence is inherently recursive. Unfortunately this would turn to be hopelessly slow as one will immediately understand that the subproblem redundancy grows exponentially in $O(\varphi^{n})$ ($F_{n-1},\dots, F_{0}$). The number of stack frames and operations are proportional to the final numeric answer.

Paired with a lookup table (e.g. **cache**, **memoïzation**) that stores the results of previously solved subproblems, the programming pattern ensures unique instance computation, bringing back time complexity to somewhat linear $O_{n}$.

**Iteration** Both the starting points and the number of iterations to climb the ladder of the sequence are well known ahead. It could also be returned via a generator `function*`.

In regards with Fibonacci, both approaches actually are performing almost equally, in $O_{n}$, when executing the sequence along the full path.

<details>
<summary>Dynamic programming</summary>

Recursion and iteration are equally expressive. The former can be replaced by the latter with eventually an _explicit call stack_, while iteration can be turned into _tail_ recursion (_tail call elimination_).

$$\text{iteration } + \text{ tabulation} \to \text{bottom-up approach}$$

$$\text{recursion } + \text{ memoïzation} \to \text{top-down approach}$$

Generally, two properties of a problem should be observed while considering dynamic programming:

1. **Subproblem redundancy**, meaning valid results to smaller instances are useful numerous times to solve one larger instance of the problem. _Fibonacci sequence_ ticks the box big time!

2. **Subproblem optimality**, meaning an optimal solution of the larger instance is obtained thanks to the optimal results of each subproblem, instead of trying every possible valid ways. (e.g. _shortest path search_ meets the property whereas _longest path search_ does not). Here again, the problem at hand comply with this principle.

A primary difference is that recursion can be employed as a solution without prior knowledge as to how many times the process will have to repeat, or as to how the problem will exactly destructure into smaller instances, while a successful iteration requires that foreknowledge. Implementing an algorithm using iteration may not be easily achievable. Many problems are inherently recursive: e.g. **multiple recursion** like _dfs_, **generative recursion** such as _gcd_, _binary search_, _mergesort_, etc. They may be implemented iteratively with the help of an explicit stack, but the programmer effort involved in managing the stack, and the complexity of the resulting program, arguably outweigh any advantages of the iterative solution.
</details>

<details>
<summary>Iterative code</summary>

```javascript
const dynamic = (n) => {let [a, b]=[1, 0]; for (let i=2; i<=n; i++) {[a, b]=[a + b, a]}; return a;};
```
</details>

**Matrix exponentiation**

The algorithm is executing the simple-looking matrix form $(b)$ of the Fibonacci sequence.

$$  (b)
    \quad
    \begin{bmatrix}
    1 & 1 \\
    1 & 0
    \end{bmatrix} ^{n}
    =
    \begin{bmatrix}
    F_{n+1} & F_{n} \\
    F_{n} & F_{n-1}
    \end{bmatrix} $$

Running the equation step by step, $F_{1},\dots,F_{n-1},F_{n}$, would degenerate into the vanilla formula already dynamically programmed. Good news! The left hand-side shifts to a multiplicative operator instead of the additive recurrence $F_{n}$ meaning one can leverage on the tactic of _exponentiation by squaring_.

**Binary exponentiation** is a general method for faster computation of large powers of a number, or a _square matrix_ (also called _double and add_). It is a corollary of the powerful **divide and conquer** algorithm paradigm. The process consists of repeatedly computing the _squaring_ of $x$ on the observation that for any $n$:

$$ n\in \mathbb{N}^{+} x^{n} =
    \begin{cases}
        \big(x^{2}\big)^{\frac{n}{2}} & n_{even} \\
        x\big(x^{2}\big)^{\frac{n-1}{2}} & n_{odd}       
    \end{cases}
    \quad \mid \quad
    x^{0}=1
    \quad \mid \quad
    n\in \mathbb{Z}^{-} x^{-n} \iff \Big(\cfrac{1}{x}\Big)^{n} $$

Combined with the [**binary expression**](https://en.wikipedia.org/wiki/Binary_number) of the exponent $n$, the algorithm conveniently loops to calculating the power $2$ of the preceeding iteration result where,

- The number of squaring operations, also of iterations, is equal to the number of _bits_, i.e. $\lfloor log_{2}\text{ }n\rfloor$.<br/>Each of these steps doubles the exponentiation.

- A complementary simple multiplication by $x$ is performed when the iterated _bit_ is $1$.<br/>This increments the exponent by $1$ only.

Logarithmic complexity $O(log_{n})$ of this algorithm outperforms the trivial method which runs in $O(n)$. For example, evaluating $F_{123456}$ takes only $17$ iterations with this process, while it will require $123456$ loops with a coding pattern that sticks to the vanilla Fibonacci formula.

<details>
<summary>Calculation example</summary>

Exponentiation by squaring for $\alpha^{n}$ with $n=38$. Recall in binary:

$\quad 38 = (2^{5}\times 1) + (2^{4}\times 0) + (2^{3}\times 0) + (2^{2}\times 1) + (2^{1}\times 1) + (2^{0}\times 0) = 32+0+0+4+2+0 = 100110_{2}$.

| _i_ | bit | $\alpha^{n}_{start}$ | $n_{start}$ | operation | $n_{end}$ | result |
|-----|-----|-----|-----|-----|-----|-----|
| 0 | ${\color{blue}1}00110$ | $\alpha^{0} = 1$ | $0$ | $\alpha^{2}\times \alpha^{1} = \alpha^{1}$ | $1$ | $\alpha$ |
| 1 | $1{\color{blue}0}0110$ | $\alpha^{1}$ | $1$ | $(\alpha^{1})^{2}$ | $2$ | $\alpha^{2}$ |
| 2 | $10{\color{blue}0}110$ | $\alpha^{2}$ | $2$ | $(\alpha^{2})^{2}$ | $4$ | $\alpha^{4}$ |
| 3 | $100{\color{blue}1}10$ | $\alpha^{4}$ | $4$ | $(\alpha^{4})^{2}\times \alpha^{1}$ | $9$ | $\alpha^{9}$ |
| 4 | $1001{\color{blue}1}0$ | $\alpha^{9}$ | $9$ | $(\alpha^{9})^{2}\times \alpha^{1}$ | $19$ | $\alpha^{19}$ |
| 5 | $10011{\color{blue}0}$ | $\alpha^{19}$ | $19$ | $(\alpha^{19})^{2}$ | $38$ | $\alpha^{38}$ |

In the end, the iteration has performed $(c_{i}) \to \alpha^{38} = \Big[\big(\big(\big(\big(\big(\alpha^{0} \times \alpha\big) _{{\color{blue}1}}^{2}\big) _{{\color{blue}2}}^{2} \big) _{{\color{blue}4}}^{2} \times \alpha \big) _{{\color{blue}9}}^{2} \times \alpha \big) _{{\color{blue}19}}^{2}\Big] _{{\color{blue}38}}$.

Alternatively, one may also process according to $(c_{ii}) \to \alpha^{100110_{2}} = \alpha^{2^{5}} \times \alpha^{2^{2}} \times \alpha^{2^{1}} = \alpha^{32} \times \alpha^{4} \times \alpha^{2}$.
</details>

<details>
<summary>Programming examples</summary>

Illustration of computation table above, running binary from _left_ to _right_.

```javascript
const formula_i = (x, n) => {let exp = 1, binary = n.toString(2);
	for (let bit of binary) {exp *= exp; if (bit == 1) {exp *= x};}; return exp;};
```
Alternative formula though not preferred, running binary from _right_ to _left_.

```javascript
const formula_ii = (x, n) => {let exp = 1, binary = n.toString(2), i = binary.length - 1;
	do {if (binary[i] == 1) {exp *= x}; x *= x;} while (i--); return exp;};
```

Iterative version with constant auxiliairy memory `y`. 

```javascript
function exponentiationBySquaring (x, n) {
    if (n < 0) {x = 1 / x; n = -n;};
    if (n == 0) {return 1;};
    let y = 1; // stores the complementary simple multiplications
    while (n > 1) {
        if (n % 2 != 0) {y *= x; n -= 1;}
        else {x *= x; n /= 2;};
    };
return x * y;};
```

Version performing a fixed quantity of operations (multiplications and squarings) regardless of specific's bit value for cryptographic concerns.

```javascript
function MontgomeryLadder (x, n) {
    let [x1, x2] = [x, x * x]; let base = n.toString(2);
    for (let i = 1; i < base.length; i++) {
        if (base[i] == 0) {[x1, x2] = [x1 * x1, x1 * x2];}
        else {[x1, x2] = [x1 * x2, x2 * x2]};
    };
return x1;};
```
</details>

<details>
<summary>Generalized exponentiation</summary>

Exponentiation by _squaring_ can be viewed as a suboptimal **addition-chain** exponentiation algorithm. Equivalently, it is the minimal number of multiplications required to compute the $n^{th}$ power. The determination of a shortest addition chain is _hard_ meaning no efficient optimal methods are currently known for arbitrary exponents. The problem has been proven **NP-complete**.
</details>

**Fast double**

The matrix exponentiation method allows for working fast the sequence up to determining a great Fibonacci number of whereas before it was endlessly slow. Nevertheless, computing the whole matrix ends up to redundant calculations as various cells contain identical values. Using the **double identities** instead address this concern.

$$ (ii) \to F_{2n} = F_{n} \times \Big[2\times F_{n+1} - F_{n}\Big] $$

$$ (iii) \to F_{2n+1} = F_{n+1}^{2} + F_{n}^{2} $$

It is worth pointing out the strength of **pair induction** versus a simple relation which can lead to a dead-end or partial sequencing. Indeed, simple induction like $n\to 2n$ would only jump on _double bases_ like so $F_{1} \to F_{2} \to \dots \to F_{2^{k}}$ which is not sufficient. On the contrary, multiple induction allows to calculate indefinitely values of the sequence. First, one starts with $n$ and its adjacents $(n-1)$ $(n+1)$, then induces $(2n-1), (2n), (2n+1)$, which can be pursued thereafter independently from any of the three latter points (somehow _horizontally_ and _vertically_), and so on, over again, leading to infinite induction and complete sequencing.

$$  \begin{cases}
        F_{0} \\
        F_{1} \\
        F_{2}
    \end{cases}
    \quad \to
    \begin{cases}
        F_{n-1} \\
        F_{n} \\
        F_{n+1}
    \end{cases}
    \quad \dots \quad \to
    \begin{cases}
        F_{2n-1} \\
        F_{2n} \\
        F_{2n+1}
    \end{cases}
    \text{or}
    \begin{cases}
        F_{2n} \\
        F_{2n+1} \\
        F_{2n+2}
    \end{cases}
    \quad \dots \quad \to
        \begin{cases}
        F_{4n-1} \\
        F_{4n} \\
        F_{4n+1}
    \end{cases}
    \text{or}
    \begin{cases}
        F_{4n+1} \\
        F_{4n+2} \\
        F_{4n+3}
    \end{cases}
    \dots \text{or}
    \begin{cases}
        F_{4n-3} \\
        F_{4n-2} \\
        F_{4n-1}
    \end{cases}
    \quad \dots $$

<details>
<summary>Iterative code</summary>

```javascript
const iterativeWrappedIIFE = (n) => 
    (func => ((n) || (n % 2)) ? func(Math.abs(n)) : -func(Math.abs(n))) // negafibonacci
    (function fibonacci (n) {
        n = n.toString(2); // exponent binary notation
        let [f_2n1, f_2n] = [1n, 0n]; // initialization
    	for (let i = 0; i < n.length; i++) {
            [f_2n1, f_2n] = [(f_2n1 * f_2n1) + (f_2n * f_2n), f_2n * (f_2n1 * 2n - f_2n)];
            if (n[i] == 1) {[f_2n1, f_2n] = [f_2n1 + f_2n, f_2n1];};};
    return f_2n;}
    );
```
</details>

**Binet's turnaround**

Since the closed expression requires dealing with irrational $\sqrt{5}$, it has to cope with _floating-point_ imprecision. Hence, in its pure form, it is actually of little use for practical implementations. Approximations and errors prompt as early as $n\gt 70$. Currently, with the JavaScript code at hand, `Math.sqrt(5)` begins pushing deviation from $F_{79}$.

<details>
<summary>Operating system</summary>

Computing directly $\varphi$ via the operating system calculator, one can nevertheless check that _floating-point_ precision works fine for higher instances of the sequence ([prime factorization](https://mersennus.net/fibonacci/f1000.txt)). For example:

$$\quad F(500) \approx \Big \lfloor \Big(\cfrac{\sqrt{5}+1}{2}\Big)^{500} \Big\rceil$$

$\quad F(500) = 3\times 5^{3}\times 11\times 41\times 101\times 151\times 251\times 401\times 3001\times 570601\times 112128001\times 1353439001\times$ <br/>
$\quad 28143378001\times 5465167948001\times 84817574770589638001\times 158414167964045700001 $
`// true`
</details>

**Symbolic algebra** approach can remove the floating-point difficulty provided with $\varphi$ and $\varphi'$. The idea is to not compute $\sqrt{5}$. It consists of setting a representation $\alpha=(a,b)$ analogous to _complex numbers_:

$$\alpha = (a,b) \iff \cfrac{1}{2}\times (a+b\sqrt{5})$$

- $a$ and $b$ being respectively the **real** and **algebraic** parts of $\alpha$.
- Obviously, $(1,1)\iff \varphi$ and $(1,-1)\iff \varphi'$. Besides $(2,0)\iff 1$.

Using this notation it can be simply developed $\alpha^{2}$:

$$\quad \alpha^{2} = \big(\cfrac{1}{2}\times (a+b\sqrt{5}) \big)^{2} = \cfrac{1}{4}\times \big( (a^{2} + 5b^{2}) + 2ab\sqrt{5}\big) = \cfrac{1}{2}\times \Big(\cfrac{a^{2} + 5b^{2}}{2} + ab\sqrt{5}\Big)$$

$$\iff \alpha^{2} = (a',b') = \Big(\cfrac{a^{2} + 5b^{2}}{2}\text{ },\text{ }ab\sqrt{5}\Big)$$

Similarly, one can obtain the representation $\varphi \times \alpha$:

$$\varphi \times \alpha = \Big(\cfrac{a+5b}{2}\text{ },\text{ }\cfrac{a+b}{2}\Big)$$

Thanks to the two operations, it can also be undertaken one pairing $(a,b)$ for which $\varphi^{n} = (a,b)$ and $(\varphi')^{n} = (a,-b)$. Then substituting in Binet's formula,

$$\quad F_{n} = \cfrac{1}{\sqrt{5}} \Big( \varphi^{n} - \varphi'^{n} \Big) = \cfrac{1}{\sqrt{5}} \Big[ \cfrac{1}{2} \times \Big(a + b\sqrt{5}\Big) - \cfrac{1}{2} \times \Big(a - b\sqrt{5}\Big) \Big] = \cfrac{a}{2\times \sqrt{5}} + \cfrac{b}{2} - \cfrac{a}{2\times \sqrt{5}} + \cfrac{b}{2}$$

It is deduced the **straightforward** and surprisingly **costless result**:

$$F_{n} = {\color{blue}b} \gets \varphi^{n} = (a,{\color{blue}b})$$

Additionally this approach is meant to be run using **binary exponentiation**.

<details>
<summary>Caveat</summary>

Before running this algorithm, one needs to align the return initialization with the loop index.

- `[a,b] = [2,0]` means $(2,0)\iff 1$. Loop traverses binary array from most left `bit[0] = 1`.
- `[a,b] = [1,1]` means $(1,1)\iff \varphi$. Loop traverses binary expansion from second `bit[1]`.
</details>

### Complexities and runtime

Programming patterns of the Fibonacci sequence exhibit a large range of algorithm classes and time complexities:

| Method | Time | Comment |
|:-------|:-----|:--------|
| Textbook | $O(2^{n})$ | $F_{45} \to \gt 30s$, runs $3\text{ }672\text{ }623\text{ }805$ calls! | 
| Cached recursion | $O(n)$ | `node.js` stack size is exceeded beyond $F_{8400}$ | 
| Tabulated iteration | $O(n)$ | runtime for $F_{1\text{ }000\text{ }000} \to 7.0s \sim 7.5s$ |
| Matrix exponentiated | $O(log_{n})$ | $F_{1\text{ }000\text{ }000} \to 110ms$ (redundant computations) |
| Fast double | $O(log_{n})$ | $F_{1\text{ }000\text{ }000} \to 40ms\sim 45ms$ |
| Binet algebraic | $O(log_{n})$ | $F_{1\text{ }000\text{ }000} \to 40ms\sim 45ms$ |

Here a good illutration that **bisect paradigm** is a paramount optimization tool which often leads to an improvement of the **asymptotic cost** of the solution. If $(i)$ the base cases have constant-bounded size, the work of splitting the problem and combining the partial solutions is proportional to the problem's size $n$, and $(ii)$ there is a bounded number $p$ of sub-problems of size  $\displaystyle \sim n/p$ at each stage, then the cost of the algorithm will be **logarithmic** like so $O(n log_{p} n)$.

Some notable examples of _divide-and-conquer_ frameworks:
- The **mergesort** algorithm, invented by _John von Neumann_ in 1945, specifically developed for computers,
- The ancient _Euclidean_ algorithm to determine the **greatest common denominator** of two numbers,
- the **Karatsuba multiplication** algorithm that performs multiplication of two $n$-digits integers in $O(n^{log_{2}^{3}})$.

In computer science, $O$ notation characterizes the **asymptotic analysis** of an algorithm or a function when the argument tends towards _infinity_ typically, or sometimes towards a particular value. The letter $O$ was chosen by its inventor Paul Bachmann to stand for _Ordnung_, meaning _order of approximation_.

It is very useful to **classify algorithms for efficiency**. What matters is the **growth rate** and $O$ focuses on the **upper bound** (e.g. _worst-case_) of the growth rate of the function. In this setting, the contribution of the terms that grow _most quickly_ will eventually make the other ones irrelevant. As a result, these simplification rules can be applied:

- When $f(x)$ is a sum of several terms and one has a larger growth rate, it can be kept while all others omitted.
- When $f(x)$ is a product of multiple terms, any constants (not dependent on $x$) can be omitted.

Therefore,
- Both $f(x)=x$ and $g(x)=\text{ }^{x}/_{2}$ are in $O(x)$.
- $f(x)=6x^{4}-100x^{3}+9$ is in $O(x^{4})$.

Moreover, the precise number of steps depends on the details of the machine model on which the algorithm executes, but different computers typically vary by a constant factor so $O$ notation captures the essence of reasoning. Besides, it does not enlighten much to detail how exactly an algorithm is fast or slow especially because a computer tomorrow will likely be faster than the one today! 

<details>
<summary>Clock rate</summary>

Aside from algorithm efficiency, hardware specifications matters!

The performance of a computer is very dependent on the **Central Processing Unit**, the _brain of the PC_. It processes instructions from all different programs every second. Some of these instructions involve simple arithmetic while others are more complicated.

The **clock speed** measures the number of **cycles** the CPU executes per second, measured in _GHz_ (Gigahertz). A cycle is the basic unit that measures the speed of the CPU. During each cycle, billions of transistors within the processor open and close. This is how the CPU executes the calculations contained in the instructions it receives. Sometimes, multiple instructions are completed in a single clock cycle. In other cases, one instruction might be handled over multiple clock cycles.

Different processor designs handle instructions differently. Moreover, one older chip with a higher clock speed may very well be outperformed by a slower but newer processor whom architecture deals with instructions more efficiently. Of course, there are many other factors to consider when measuring the performance index of a computer such as data bus, latency of memory, architecture, microarchitectures, cache, etc.
</details>

In a nutshell, one algorithm time complexity could be intuitively spotted like so:

| With this rule of thumb, chances are.. | Notation | Class | Example |
|:---------|:------|:--------------|:--------|
| Whenever the number of steps is _constant_ whatever the size of the input ($1$, $12$ or even $143$ steps, but fixed!) | $O(1)$ | constant | lookup table |
| Anytime a problem can be _divided_ over again into $k$ smaller identical subproblems | $O(log_{k}n)$ | logarithmic | binary search |
| Whenever algorithm is _linearly_ processing $k$ actions for each input but traverses the input only one time | $O(n)$ | linear | read the book |
| When it involves _walking through the input about input times_, or keeps _swooping through_ with nested loops | $O(n^{2})$ | quadratic | school multiplication, bubblesort |
| Anytime the growth rate in time _doubles_ or $k$ _multiplies_ for each increment to the input size | $O(k^{n})$ | exponential | plain Fibonacci, <br/> password bruteforce |
| When the running time grows in a factorial way like for generating all unrestricted permutations | $O(n!)$ | factorial | travelling salesman problem via bruteforce |

Generally speaking, a sublinear time is considered fast whereas complexities higher than linearithmic are said slow. Typically there is a **tradeoff** **time vs. space** (more relevant decades ago than nowadays) or _time vs intelligence_ (e.g. effort in writing a more sophisticated model).

To end with, together with $O$ notation for worst-case classification, there exists the corresponding notations:
- $\Omega$ is expressing the lower bound (or _best case_) of the algorithm,
- $\Theta$ is used when $O = $\Omega$.

| merge sort | binary search | hash table |
|:---------:|:-------------:|:----------:|
| ![mergesort](./img/mergesort.png) | ![binarysearch](./img/binarysearch.png) | ![hashtable](./img/hashtable.png) |
| Mergesort is an efficient **linearithmic** general-purpose sorting algorithm. Most implementations are stable meaning the relative order of equal elements remains. | It runs in logarithmic time in worst case and can solve a wide range of problems like finding the _next smallest_ or _next largest_ item relative to a target. | Associative array that maps keys to values, uses a **hash code** to compute an index from which the desired value is found. On average more efficient than search trees. |

### Fun stuff :tada:

### Caveats

Computers perform multiplication and division operations internally using a combination of bitwise shifting and addition or subtraction. For multiplication, the computer can use repeated addition or a more efficient algorithm such as the binary multiplication algorithm. For division, the computer can use repeated subtraction or a more efficient algorithm such as the binary division algorithm. In both cases, the computer manipulates binary representations of numbers to perform the operations. These internal processes are complex and optimized for efficiency in hardware and software implementations.

https://www.quora.com/How-do-computers-perform-multiplication-division-operations-internally-by-additive-approaches

Standard C compilers typically use their own optimized algorithms for multiplication, and they may utilize techniques such as Karatsuba or other fast multiplication algorithms to improve efficiency. When writing efficient code, it's generally best to rely on the standard multiplication operations provided by the compiler unless you have specific performance requirements that necessitate a custom implementation. Modern compilers are highly optimized and can often generate efficient code for standard operations. However, if you have specific needs that require a custom multiplication algorithm, you can certainly implement Karatsuba or other fast multiplication algorithms. Always remember to profile your code to identify performance bottlenecks before optimizing specific operations.

The C compiler generally uses the multiplication provided by the hardware (assuming that it does) and does not use it’s own multiplication algorithm. And, there is good reason for doing that. You will not get better performance by hand-coding your own Karatsuba algorithm. The instruction decode time alone will kill your performance, not to mention the stress you will be adding to the instruction cache, etc. (And, when the hardware doesn’t provide the appropriate instruction, someone has written (and very likely tuned) a sufficiently efficient implementation as part of the C run-time library.)

Unless you are doing matrix multiplication, which usually is not a single hardware instruction, don’t code your own multiplication. That is the worst case of improper optimization I have heard of in a while. If the machine (e.g. via a GPU) does matrix multiplication, don’t even code your own matrix multiplication. And, if there is a library to use, use that in case there isn’t an instruction. Someone else has probably tuned the library. But, don’t code your own multiplication.

Don’t try to imagine what optimizations to do. Don’t. Write plain simple code, and then measure it. Then, a tool like oprofile, gperf, vTune, or one of a dozen others whose names don’t jump to my mind will tell you where you are spending time and then you can think about optimizing that.

But guessing without data is a terrible solution. You are nearly as likely to make the code slower as you are faster and you will certainly make it more complex, more fragile, harder to maintain, and probably even harder to actually optimize

### Multiplications




### Reference

https://www.nayuki.io/page/fast-fibonacci-algorithms
https://www.nayuki.io/page/karatsuba-multiplication
https://www.nayuki.io/category/programming
https://www.nayuki.io/

https://en.wikipedia.org/wiki/Hexadecimal
https://en.wikipedia.org/wiki/Low-level_programming_language
https://en.wikipedia.org/wiki/X86

https://en.wikipedia.org/wiki/Fibonacci_sequence
https://en.wikipedia.org/wiki/Exponentiation_by_squaring
https://en.wikipedia.org/wiki/Karatsuba_algorithm
https://en.wikipedia.org/wiki/Multiplication_algorithm
https://en.wikipedia.org/wiki/Golden_ratio
https://fr.wikipedia.org/wiki/Nombre_d%27or
https://en.wikipedia.org/wiki/Euclid%27s_Elements

https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm
https://en.wikipedia.org/wiki/Binary_search_algorithm
https://fr.wikipedia.org/wiki/Recherche_dichotomique
https://en.wikipedia.org/wiki/Big_O_notation

https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4
https://www.youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4
https://www.youtube.com/watch?v=4oqjcKenCH8&list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4&index=4

https://en.wikipedia.org/wiki/Binary_multiplier
https://en.wikipedia.org/wiki/Dadda_multiplier

https://python.plainenglish.io/karatsuba-multiplication-65a2efcccfd9

https://tomrocksmaths.com/2022/08/31/how-do-computers-do-maths/
https://www.mjr19.org.uk/courses/lect1.pdf
https://persons.iis.nsk.su/files/persons/pages/rustep30dec21faifel.pdf
https://arxiv.org/ftp/arxiv/papers/2112/2112.10895.pdf

https://maa.org/press/periodicals/convergence/russian-multiplication-microprocessors-and-leibniz

https://wimal-perera.medium.com/golden-ratio-and-fibonacci-numbers-the-ultimate-toolkit-for-defining-the-geometry-of-universe-50829526e154

https://library.ethz.ch/en/locations-and-media/platforms/virtual-exhibitions/fibonacci-un-ponte-sul-mediterraneo/reception-of-fibonacci-numbers-and-the-golden-ratio/euclid-construction-of-the-golden-ratio.html

<!-- FUN -->
https://www.cantorsparadise.com/why-does-1-89-represent-the-fibonacci-sequence-7e09873533c3
https://fr.wikipedia.org/wiki/Suite_de_Fibonacci#Interpr%C3%A9tations_combinatoires
https://engrmuhammadusman108.medium.com/kilometres-to-miles-conversion-approximation-of-fibonacci-series-d824add3d89c

https://brilliant.org/wiki/fast-fibonacci-transform/
https://brilliant.org/wiki/karatsuba-algorithm/

https://medium.com/@cmchang/master-fibonacci-9b689facfe61
https://medium.com/@sohnnick/unicode-and-hexadecimal-simplified-69e49f95ad62

https://robwilsondev.medium.com/bigo-and-beyond-how-to-compute-fibonacci-sequence-efficiently-with-matrix-exponentiation-d9924545fe54
https://medium.com/codex/bit-manipulation-in-javascript-117cd525e4d
https://www.codecademy.com/resources/docs/javascript/bitwise-operators
https://blog.logrocket.com/guide-javascript-bitwise-operators/
https://bootcamp.uxdesign.cc/bitwise-operators-in-javascript-their-usage-in-real-life-scenarios-9242c666b51

https://cp-algorithms.com/algebra/fibonacci-numbers.html
https://cp-algorithms.com/algebra/binary-exp.html

https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#sorting-algorithms

https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
*/