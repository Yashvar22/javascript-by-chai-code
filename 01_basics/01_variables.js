const accountId = 142443;
let email = "yash23@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accState;
//accountId = 2;//not allowed
email = "hc@gmail.com";
accountPassword = "2686";
accountCity = "luckno";
console.log(email);

/*
prefer not to use var 
because of issue of in block and functional scope
*/
console.table([email, accountPassword, accountCity, accState]);
