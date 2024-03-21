const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        oddSum += numbers[i];
    }
}

console.log(oddSum); // 25
