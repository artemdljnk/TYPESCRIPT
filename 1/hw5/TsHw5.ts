// ----------------------#I2XsG6f---------------

// let solve = (a:number, b: number):number => a + b;

// --------------#ETGAxbEn8l-------------

// let solve = (r:number):number => Math.PI * r * r;

// ------------#Mbiz5K4yFe7---------------

// let solve = (radius:number, height:number):number => 2 * Math.PI * radius * height;

// ------------------#SIdMd0hQ------------

// let solve = (array:any):void => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }

// ---------------#59g0IsA------------

// let solve = (text:string):string => {document.write(`<p>${text}</p>`)};

// ---------------#hOL6126---------

// let solve = (text:string):string => {
//         document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
//     `)}

// -------------#0Kxco1edSN--------------

// let solve = (text:string, counter:number):void => {
//         document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`'<li>' + ${text} + '</li>'`);
//     }
//     document.write('</ul>');
// }

// ---------------#gEFoxMMO-----------------------

// const foobar1 = (arrayOfPrimitives:any[]):void => {
//     document.write(`<ul>`);
//     for (const item of arrayOfPrimitives) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// foobar1([1123, 123, 12, 312, 321, 3, 'asdads', true]);

// ---------------#bovDJDTIjt------------

// const foobar2 = (users:any[]):void => {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// };
//
// foobar2([
//     {id: 1, name: 'kokos', age: 123},
//     {id: 2, name: 'kokos', age: 123},
//     {id: 3, name: 'kokos', age: 123},
//     {id: 4, name: 'kokos', age: 123},
//     {id: 5, name: 'kokos', age: 123},
// ]);

// ----------------------#pghbnSB------------------

// const arrayMinValue = (numbers:number[]):number => {
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         let number = numbers[i];
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// };
//
// console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));

// ----------------------------#EKRNVPM--------------------

// const sum = (arr:number[]):number => {
//     let basket = 0;
//     for (const item of arr) {
//         basket = basket + item;
//     }
//     return basket;
// };
//
// console.log(sum([1, 2, 10]))

// ----------------------#kpsbSQCt2Lf----------------

// const swap = (arr:any[], i1:number, i2:number) => {
//     if (i1 < arr.length && i2 < arr.length) {
//         let temp = arr[i1];
//         arr[i1] = arr[i2];
//         arr[i2] = temp;
//         return arr;
//     }
//     return '!!!!!!!';
// };
//
// console.log(swap([11, 22, 33, 44], 2, 30))

// -------------------------#mkGDenYnNjn.html------------------

// const exchange = (sumUAH:number, currencyValues:number[], exchangeCurrency:number):number => {
//     let chosenCurrency;
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             chosenCurrency = item;
//         }
//     }
//     let result = sumUAH / chosenCurrency.value
//     return result
// };
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'))