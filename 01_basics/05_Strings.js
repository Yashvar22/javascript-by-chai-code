const name = "hitesh";
const repoCount = 50;

//console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//declare string

const gameName = new String("hitesh-hc-com");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //s
console.log(gameName.indexOf("s")); //4

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1 = "   hitesh    ";
console.log(newString1.trim());

const url = "https:yash.com/yash%20singh";

//url.replace("%20", "-");
console.log(url.replace("%20", "-"));

console.log(url.includes("yash")); //true

console.log(gameName.split("-"));
