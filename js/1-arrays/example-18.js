const month = ['August', 'September', 'October', 'November', 'December'];

console.log(month); // [ 'August', 'September', 'October', 'November', 'December' ]

month.length = 2;

console.log(month); // [ 'August', 'September' ]

month.length = 5;

console.log(month); // [ 'August', 'September', <3 empty items> ]
