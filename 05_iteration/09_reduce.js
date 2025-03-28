const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc:${acc}, and currval: ${currval}`);

//   return acc + currval;
// }, 3);
const myTotal = myNums.reduce((acc, currval) => {
  console.log(`acc:${acc}, and currval: ${currval}`);

  return acc + currval;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "Python",
    price: 999,
  },
  {
    itemName: "MAD",
    price: 5999,
  },
  {
    itemName: "Data Science",
    price: 12999,
  },
];

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTopay);
