
let arr = [];

for (let i = 1; i <= 1000; i++) {
    arr.push(i);
}
console.log('Total Numbers of Array', arr);

function divisibility(z) {

    for (let i = 1; i <= arr.length; i++) {
        let result = arr.filter(number => number % z === 0);
        return result;
    }
}

console.log('Divisible by 3: ', divisibility(3));
console.log('Divisible by 10: ', divisibility(10));
console.log('Divisible by 21: ', divisibility(21));

let arrOf30s = [];
for (let i = 1; i <= 30; i++) {
    arrOf30s.push(i);
}

console.log('Arrays between 1 and 30: ', arrOf30s);

let newArray = [];

function divisibleFinder() {
    for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arrOf30s.length; i++) {
        //    let result2 = arr.filter(number => number % arrOf30s[i] === 0);
        //    return result2;
           if (arr[i] % arrOf30s[i] === 0 ) {
               return newArray.push(arr[i]);
           }
        }
    }
}
console.log(divisibleFinder());




