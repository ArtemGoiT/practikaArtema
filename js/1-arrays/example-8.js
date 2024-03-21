const month = ['August', 'September', 'October'];

// ES5
// Утиная типизация
// Duck typing
if (typeof month === 'object' && month.splice) {
    console.log('→ Это массив!');
}
