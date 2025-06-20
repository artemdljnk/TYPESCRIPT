// -----------------#iz6emEsP2BA----------------

// type coursesAndDurationArrayType = {
//   title: string;
//   monthDuration: number;
// }
//
// let coursesAndDurationArray:coursesAndDurationArrayType[] = [
//     {title: 'JavacriptS Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.map((course:coursesAndDurationArrayType, index:number) =>({...course, id: index + 1}));

// ----------------------#AiN5CoUQ------------------

// function cloner(obj:string[]):string[] {
//     if (obj) {
//         let functions:string[] = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const functionClone = obj[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObj:string = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             cloneObj[func.key] = func.functionClone;
//         }
//         console.log(cloneObj);
//         return cloneObj
//     }
//     throw new Error('!!!!!');
// }
// const clone:string[] = cloner({id: 123, name: 'asdsad', greeting() {console.log('hello')}, foo() {console.log('bar')}});
// clone.foo();