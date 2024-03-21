someLabel: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        if (j === 2) {
            continue someLabel;
        }

        console.log(i, j);
    }
}

// Итерация 1
// 0
// 0 // 1

// Итерация 2
// 1
// 0 // 1

// Итерация 3
// 2
// 0 // 1

// Результат
// 0
// 1

// 0
// 1

// 0
// 1
