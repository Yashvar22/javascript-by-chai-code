const userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

//falsy value

//false,0,-0,BigInt 0n,null,undefined,NaN,""

// truthy Value
//"0",'false'," ",[],{},function(){},

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length == 0) {
  console.log("object is empty");
}

//Nullish Coalescing (??):null undefined;
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);

//Terniary Operator

//condition ? true:false;
const icePrice = 100;

icePrice <= 80 ? console.log("less than 80") : console.log("more than 80");
