const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedNumbers = [];

let i = numbers.length - 1;
let j = 0;

while (numbers[i]) {
    // reversedNumbers[0] = numbers[9]
    // reversedNumbers[1] = numbers[8]
    reversedNumbers[j] = numbers[i];
    i--;
    j++;
    console.log(reversedNumbers);
}

console.log('=================================');

console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(reversedNumbers); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
