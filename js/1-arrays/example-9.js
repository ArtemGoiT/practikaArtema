const month = {
    0: 'August',
    1: 'September',
    2: 'October',
    length: 3,
    splice: function() {},
};

if (typeof month === 'object' && month.splice) {
    console.log('→ Это массив!'); // ложный результат
}
