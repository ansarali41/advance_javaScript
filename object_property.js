const students = [
    { id: 1, name: 'ansar' },
    { id: 2, name: 'akhu vai' },
    { id: 3, name: 'mahatib' },
    { id: 4, name: 'rifat' },
    { id: 5, name: 'mufit' }
];
const studentsName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     studentsName.push(element); 
// }
// console.log(studentsName);
const result = students.map(x => x.name);
console.log(result);

const ids = students.map(x => x.id);
console.log(ids);

const bigger = students.filter(x => x.id > 2);
console.log(bigger);

const findingOne = students.find(x => x.id == 4);
console.log(findingOne);

