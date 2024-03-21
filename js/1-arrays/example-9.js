// const month = {
//     0: 'August',
//     1: 'September',
//     2: 'October',
//     length: 3,
//     splice: function() {},
// };

// if (typeof month === 'object' && month.splice) {
//     console.log('→ Это массив!'); // ложный результат
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];
// for (let index in numbers) {
//   if (numbers[index] % 2 === 0) {
//     evenNumbers.push(numbers[index]);
//   }
// }

// console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]
// const numbers = [
//   -91, 18, 11, -23, -98, 28, -81, -100, -7, -45, 52, 41, 75, -98, 27, 41, 25, 2,
//   39, -18,
// ];
// let pozitiveCount = 0;
// let negativeCount = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const izPozitive = numbers[i] > 0;
//   if (izPozitive) {
//     pozitiveCount += numbers[i];
//   } else {
//     negativeCount += numbers[i];
//   }
// }
// console.log("Сумма положительных элементов:", pozitiveCount);
// console.log("Сумма отрицательных элементов:", negativeCount);
// function join() {
//   // Проверяем, были ли переданы аргументы в функцию
//   if (arguments.length === 0) {
//     return null; // Если аргументов нет, возвращаем null
//   }

//   const filterStorge = []; // Создаем пустой массив для хранения отфильтрованных строк

//   // Перебираем все переданные аргументы функции
//   for (let i = 0; i < arguments.length; i++) {
//     const element = arguments[i]; // Получаем текущий аргумент

//     // Проверяем, является ли текущий аргумент строкой и не пустой ли она после удаления пробелов в начале и в конце
//     if (typeof element === "string" && element.trim() !== "") {
//       filterStorge.push(element.trim()); // Добавляем непустую и непробельную строку в массив
//     }
//   }

//   return filterStorge.join(" "); // Объединяем элементы массива в строку с пробелами между ними и возвращаем результат
// }

// // Примеры использования функции
// console.log(join("Hello", "Lectrum"));       // Вывод: Hello Lectrum
// console.log(join("Hello", "", "Lectrum"));   // Вывод: Hello Lectrum
// console.log(join("Hello", " ", "Lectrum"));  // Вывод: Hello Lectrum
