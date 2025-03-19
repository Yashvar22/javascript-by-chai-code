//array

const myHeroes = ["thor", "IronMan", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

//myHeroes.push(dcHeroes);

//console.log(myHeroes);
// console.log(myHeroes[3]);

const allHeroes = myHeroes.concat(dcHeroes);
console.log(allHeroes);

// const allHeroes = [...myHeroes, ...dcHeroes];
// console.log(allHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//Array.isArray("hithesh");
console.log(Array.isArray("hithesh")); //false

console.log(Array.from("yashvardhan")); //convert string to array

console.log(Array.from({ name: "hitesh" })); //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
