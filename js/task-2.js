'use strict';
// Задача 2. Композиція масивів
// Виконуй це завдання у файлі task-2.js
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function makeArray(firstArray, secondArray, maxLength) {
  //  злиття двох масивів через конкат!!!
  // іф нью.ленс більше числа поветрае нью з 0 до кількість числа - слайс
  // елс повертає рядок як є
  //console.log('All', firstArray, secondArray, maxLength);
  const newArray = firstArray.concat(secondArray);
  //console.log('New', newArray);
  //console.log('length', newArray.length);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  } else {
    return newArray;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// 4 > 3 true - 0.1.2
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// 5 > 4 true - 0.1.2.3
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// 5 > 3 true - 0.1.2
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// 4 > 2 true - 0.1
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// 4 > 4 false - all
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
// 5 > 0 true - (0, 0) - []
