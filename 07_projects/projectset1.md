# Project related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Source Code

## Project 1

```javascript

console.log("yash")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; // this will be 'grey'
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; // this will be 'white'
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; // this will be 'blue'
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; // this will be 'yello'
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id; // this will be 'purple'
    }
  });




```

## project 2 solution

```javascript
const form = document.querySelector("form");
//this usecase will give you empty
//const height= parseInt(document.querySelector('#height').value)
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span> ${BMI} </span>`;
    const para = document.querySelectorAll("p");
    if (BMI < 18.6) {
      results.innerHTML += "<br>You are Under Weight";
    } else if (BMI > 18.6 && BMI < 24.9) {
      results.innerHTML += "<br>You are Normal Weight";
    } else {
      results.innerHTML += "<br>You are Over Weight";
    }
  }
});
```

## project 3 solution code

```javaScript
const clock = document.getElementById('clock');
//document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleString());

setInterval(function(){
  let date = new Date();
//console.log(date.toLocaleString());
clock.innerHTML=date.toLocaleTimeString();
}, 1000)
```

# project 5 solution

```Javascript
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});


```

#project 6 solution

```javascript
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
```
