// -----------------#iz6emEsP2BA----------------

// type coursesAndDurationArray = {
//   title: string;
//   monthDuration: number;
// }
//
// let coursesAndDurationArray: coursesAndDurationArray[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.map((course:coursesAndDurationArray, index:number) =>({...course, id: index + 1}));

// ----------------------#AiN5CoUQ------------------

// function cloner(obj:any):any {
//     if (obj) {
//         let functions:any = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const functionClone = obj[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             cloneObj[func.key] = func.functionClone;
//         }
//         console.log(cloneObj);
//         return cloneObj
//
//     }
//     throw new Error('!!!!!');
// }
// const clone:any = cloner({id: 123, name: 'asdsad', greeting() {console.log('hello')}, foo() {console.log('bar')}});
// clone.foo();