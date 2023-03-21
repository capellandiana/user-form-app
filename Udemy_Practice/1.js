   // Todo: Add your logic
    // should return an array of objects
// function transformToObjects(numberArray) {
    
// }
const diana = [1, 2, 3, 4]
const transformToObjects = diana.map((num) => {
    return {val: num}
})

console.log(diana);
console.log(transformToObjects);
//[1, 2, 3]
//[{val: 1}, {val: 2}, {val: 3}]

// const numbers = [1, 2, 3, 4];

// const doubleNumArray = numbers.map((num) => {
//     return num * 2;
// });

// console.log(numbers);
// console.log(doubleNumArray);