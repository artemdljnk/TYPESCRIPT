// ----------------------#I2XsG6f---------------

// function solve(a: number, b: number): number {
//     return a + b;
// }

// --------------#ETGAxbEn8l-------------

// function solve(r: number): number {
//     return Math.PI * r * r
// }

// ------------#Mbiz5K4yFe7---------------

// function solve(radius:number, height:number):number {
//     return 2 * Math.PI * radius * height;
// }

// ------------------#SIdMd0hQ------------

// function solve(array:any[]):void {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }

// ---------------#59g0IsA------------

// function solve(text:string):void {
//     document.write(`<p>${text}</p>`);
// }

// ---------------#hOL6126---------

// function solve(text:string):void {
//     document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
//     `)
// }

// -------------#0Kxco1edSN--------------

// function solve(text:string, counter:number):void {
//     document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`'<li>' + ${text} + '</li>'`);
//     }
//     document.write('</ul>');
// }

// ---------------#gEFoxMMO-----------------------

// function foobar(arrayOfPrimitives:any[]):void {
//     document.write(`<ul>`);
//     for (const item of arrayOfPrimitives) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// foobar([1123, 123, 12, 312, 321, 3, 'asdads', true]);

// ---------------#bovDJDTIjt------------

// function foobar(users:any[]):void {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
//
// foobar([
//     {id: 1, name: 'kokos', age: 123},
//     {id: 2, name: 'kokos', age: 123},
//     {id: 3, name: 'kokos', age: 123},
//     {id: 4, name: 'kokos', age: 123},
//     {id: 5, name: 'kokos', age: 123},
// ]);

// ----------------------#pghbnSB------------------

// function arrayMinValue(numbers: number[]):number {
//     let min: number = numbers[0];
//     for (let i:number = 1; i < numbers.length; i++) {
//         let number:number = numbers[i];
//         if (number < min) {
//             min = number
//         }
//     }
//     return min;
// }
//
// console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));

// ----------------------------#EKRNVPM--------------------

// function sum(arr:number[]): number {
//     let basket = 0;
//     for (const item of arr) {
//         basket = basket + item;
//     }
//     return basket;
// }
//
// console.log(sum([1, 2, 10]));

// ----------------------#kpsbSQCt2Lf----------------

// function swap(arr:number[], i1:number, i2:number):number[] | string {
//     if (i1 < arr.length && i2 < arr.length) {
//         let temp: number = arr[i1]; // 11
//         arr[i1] = arr[i2];
//         arr[i2] = temp;
//         return arr;
//     }
//     return '!!!!!!!';
// }
//
// console.log(swap([11, 22, 33, 44], 2, 30));

// -------------------------#mkGDenYnNjn.html------------------

// function exchange(sumUAH: number, currencyValues:number[], exchangeCurrency:number): number {
//     let chosenCurrency;
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             chosenCurrency = item;
//         }
//     }
//     return sumUAH / chosenCurrency.value
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));