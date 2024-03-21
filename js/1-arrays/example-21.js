const month1 = ['August', 'September'];

const month2 = month1;

console.log(month1); // [ 'August', 'September' ]
console.log(month2); // [ 'August', 'September' ]

month2[0] = 'May';

console.log(month1); // [ 'May', 'September' ]
console.log(month2); // [ 'May', 'September' ]
