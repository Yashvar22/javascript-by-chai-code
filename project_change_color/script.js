const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
//console.log(randomColor());
//console.log(Math.floor(Math.random() * 16));
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changebgColor, 1000);
  }

  function changebgColor() {
    document.body.style.background = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
