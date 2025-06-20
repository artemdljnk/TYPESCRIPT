// ----------#dFeorS3m7u----------

// let str1:string = 'hello world';
// let str2:string = 'lorem ipsum';
// let str3:string = 'java script is cool'
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// ---------#8lld9HMxXWB---------

// let str1:string = 'hello world';
// let str2:string = 'lorem ipsum';
// let str3:string = 'java script is cool'
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// ------------#ClDsAm7xba7----------

// let str1:string = 'HELLO WORLD';
// let str2:string = 'LOREM IPSUM';
// let str3:string = 'JAVA SCRIPT IS COOL'
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// -------------#0b89BkYZwu---------

// let str:string = ` dirty string   `
// console.log(str.trim())

// ----------------#bfoJuse4ZzP------------

// let str:string = 'Ревуть воли як ясла повні'
// console.log(str.split(' '))

// ---------------#Rbr5kEQ------------

// let arr:number[] = [10,8,-7,55,987,-1011,0,1050,0]
// let str:string[] = arr.map(num => num + '')
// console.log(str)

// -----------------#5hqyKTfmc--------------

// function sortNums(array:number[], direction:string): number[] {
//     if (direction === 'asc') return array.sort((a:number, b:number):number => a - b);
//     if (direction === 'desc') return array.sort((a:number, b:number):number => b - a);
// }

// --------#yo06d74c1C-----------

// type coursesAndDurationArrayType = {
//   title: string;
//   monthDuration: number;
// }
//
// let coursesAndDurationArray: coursesAndDurationArrayType[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sorted:coursesAndDurationArrayType[] = coursesAndDurationArray.sort((a:coursesAndDurationArrayType, b:coursesAndDurationArrayType):number => b.monthDuration - a.monthDuration);
// let filtered:coursesAndDurationArrayType[] =  sorted.filter(value => value.monthDuration > 5);
// let mapped: coursesAndDurationArrayType[] = filtered.map((value: coursesAndDurationArrayType, index:number):coursesAndDurationArrayType => {
//     value.id = index + 1;
//     return value;
// })
// console.log(mapped);

// --------------#4LJn7zBx-------------

// type coursesArrayType = {
//   title: string;
//   monthDuration: number;
//   hourDuration: number;
//   modules: string[];
// }
//
// let coursesArray:coursesArrayType[] = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('saas')
// }))
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('docker')
// }))

// -----------------#bolvdlhP----------------

// const suits: string[] = ['spade', 'diamond', 'heart', 'club'];
// const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const cards: string[] = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
//
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
//
// console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

// ---------------------------------#EP5I1UUzAX------------------------

// const suits: string[] = ['spade', 'diamond', 'heart', 'club'];
// const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const cards: string[] = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
//
// const reduce = cards.reduce((accum, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'club':
//             accum.clubs.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//
//     }
//     return accum;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
//
// console.log(reduce);