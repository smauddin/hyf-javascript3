
function generateNumbersArray(n) {
    const numbers = [];

    for (let i = 1; i <= n; ++i) {
        numbers.push(i);
    }
    return numbers;
}

const numbers = generateNumbersArray(1000);
const dividers = generateNumbersArray(30);
console.log('Main array of Numbers:', numbers);
console.log('Array of dividers:', dividers);

function divisibilityCheckerFactory(x) {
    //function checkerFn(n) {}
    const divisiblityFun = () => numbers.filter(number => number % x === 0);
    return divisiblityFun;
    //return checkerFn;

    // Same thing can be written using Arrow functions as well
    // Try to do it at your own
}

const checkDivisibilityBy3 = divisibilityCheckerFactory(3);
console.log('Divisible by 3:', checkDivisibilityBy3());

const checkDivisibilityBy5 = divisibilityCheckerFactory(5);
console.log('Divisible by 5:', checkDivisibilityBy5());

const checkDivisibilityBy10 = divisibilityCheckerFactory(10);
console.log('Divisible by 10:', checkDivisibilityBy10());

const checkDivisibilityBy21 = divisibilityCheckerFactory(21);
console.log('Divisible by 21:', checkDivisibilityBy21());

let divider1to30 = [];
for (let i = 1; i <= 30; i++) {

    const numberOfDivider = divisibilityCheckerFactory(i);
    divider1to30.push(numberOfDivider().length);
}
console.log('Array of divisible by numbers between 1 & 30:', divider1to30);

