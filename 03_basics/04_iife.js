//immediately Invoved Function Expression (IIFE)
//why we use iifee global variable ke pollution se problem hoti hai kahi baar
//to usse hatane ke liye iife ka use karte hai

(function chai() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();

//()()//1-fun defination 2-fun call

((name) => {
  //unnamed iife
  console.log(`DB CONNEECTED 2 ${name}`);
})("Yash");
