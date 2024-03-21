const month = ['August', 'September', 'October'];

// Добавляет элемент в массив
month[11] = 'December';

console.log(month); // [ 'August', 'September', 'October', <8 empty items>, 'December' ]
console.log(month.length); // 12
