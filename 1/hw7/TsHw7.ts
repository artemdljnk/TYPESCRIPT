// -------------#XjJuucOMR0--------------

// function User(id:any, name:string, surname:string, phone:any):void{
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
// let user = new User(1, 'Artem', 'Kokos', 4324)
// console.log(user);
//
// let users:any[] = [
//     new User(1, 'Artem', 'Kokos', 4324),
//     new User(2, 'Artem', 'Kokos', 4324),
//     new User(3, 'Artem', 'Kokos', 4324),
//     new User(4, 'Artem', 'Kokos', 4324),
//     new User(5, 'Artem', 'Kokos', 4324),
//     new User(6, 'Artem', 'Kokos', 4324),
//     new User(7, 'Artem', 'Kokos', 4324),
//     new User(8, 'Artem', 'Kokos', 4324),
//     new User(9, 'Artem', 'Kokos', 4324),
//     new User(10, 'Artem', 'Kokos', 4324),
// ]
// console.log(users);

// ----------#2ikXsE2WiKZ-----------

// function User(id:any, name:string, surname:string, phone:any):void{
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
// let user = new User(1, 'Artem', 'Kokos', 4324)
// console.log(user);
//
// let users:any[] = [
//     new User(1, 'Artem', 'Kokos', 4324),
//     new User(2, 'Artem', 'Kokos', 4324),
//     new User(3, 'Artem', 'Kokos', 4324),
//     new User(4, 'Artem', 'Kokos', 4324),
//     new User(5, 'Artem', 'Kokos', 4324),
//     new User(6, 'Artem', 'Kokos', 4324),
//     new User(7, 'Artem', 'Kokos', 4324),
//     new User(8, 'Artem', 'Kokos', 4324),
//     new User(9, 'Artem', 'Kokos', 4324),
//     new User(10, 'Artem', 'Kokos', 4324),
// ]
//
// function filterFunction(user:any[]){
//     return user.id%2 === 0;
// }
// let result = users.filter(filterFunction);
// console.log(result);

// ----------------------#pOeHKct----------------

// function User(id:any, name:string, surname:string, phone:any):void{
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
// let user = new User(1, 'Artem', 'Kokos', 4324)
// console.log(user);
//
// let users:any[] = [
//     new User(1, 'Artem', 'Kokos', 4324),
//     new User(2, 'Artem', 'Kokos', 4324),
//     new User(3, 'Artem', 'Kokos', 4324),
//     new User(4, 'Artem', 'Kokos', 4324),
//     new User(5, 'Artem', 'Kokos', 4324),
//     new User(6, 'Artem', 'Kokos', 4324),
//     new User(7, 'Artem', 'Kokos', 4324),
//     new User(8, 'Artem', 'Kokos', 4324),
//     new User(9, 'Artem', 'Kokos', 4324),
//     new User(10, 'Artem', 'Kokos', 4324),
// ]
//
// function sorter(user1:any[], user2:any[]):number {
//     return user1.id - user2.id;
// }
//
// console.log(users.sort(sorter));

// -------------------#gsKLAsNWM--------------

// Array.prototype.myForEach = function(callback:any):void {
//     for (let i = 0; i < this.length; i++) {
//         if (this.hasOwnProperty(i)) {
//             callback(this[i], i, this);
//         }
//     }
// }
// const arr:number[] = [1, 2, 3];
//
// arr.myForEach((value:any, index:number):void => {
//     console.log(`${index}: ${value}`)
// })
//
// Array.prototype.myFilter = function(callback:any):any[] {
//     const result:any[] = []
//
//
//     for (let i = 0; i < this.length; i++) {
//         if (this.hasOwnProperty(i)) {
//             if (callback(this[i], i, this)) {
//                 result.push(this[i])
//             }
//         }
//     }
//     return result
// }
//
// const numbers:number[] = [1, 2, 3, 4, 5]
// const even = numbers.myFilter(num => num % 2 === 0)
// console.log(even)