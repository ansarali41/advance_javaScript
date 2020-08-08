const numbers = [0,1,2,3,4,5,7,8,9];
const part = numbers.slice(2,8);
//(duita parametter koto position theke koto position slice korbo)
//slice mane ekta ongso kete fele copy kore  rakha main array change hoy na
console.log("part",part);

const removed = numbers.splice(2,1,100,5000,10000);
//(position,koyta element delete, inject(ek ba ekadhik enject kora jabe))
//splice mane ekta songso main array theke delete kora main array o change hoy

const numbersJoin =numbers.join(" ami ");//join mane element er majkhane kisu join kora join korar por new array hoye jabe string

console.log("removed element",removed);
console.log("main array",numbers);
console.log(numbersJoin);
function doSomething(x, y=4){ 
    console.log(y);
}
doSomething(3,5);