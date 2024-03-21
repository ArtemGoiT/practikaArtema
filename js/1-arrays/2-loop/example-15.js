const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

// Задча: создать новый массив с чётными числами

// Как проверить что элемент чётный? + if
// Как записать элемент в новый массив? array[index]
// Как прочитать текущий элемент массива? numbers[i]
// Как записать элемент на следующий индекс? evenNumbers.length + 1

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers[evenNumbers.length++] = numbers[i];
    }
}

console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]
