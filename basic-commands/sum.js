console.log("❤️❤️❤️❤️❤️❤️❤️❤️❤️")

const sum = (a,b)=> parseInt(a) + parseInt(b);
console.log("sum(1,2) = ", sum(11111,2));


let array = [1,2,3,4,5,6,7,8,9,10];
//this wnt work we have to spread it
// console.log("array = ", Math.max(array));
console.log("array = ", Math.max(...array));

console.log(process.argv);
const[,,a,b] = process.argv;
console.log("Sum Of", sum(a,b));


console.log(global);