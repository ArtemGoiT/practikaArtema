const string =
    'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.';
let characters = 0;

for (let i = 0; i < string.length; i++) {
    characters += 1;
}

console.log(characters); // 165
