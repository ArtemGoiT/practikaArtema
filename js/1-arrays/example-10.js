const month = ['August', 'September', 'October'];
const month1 = {
    0: 'August',
    1: 'September',
    2: 'October',
    length: 3,
    splice: function() {},
};

// ES6+
console.log(Array.isArray(month)); // true
console.log(Array.isArray(month1)); // false
