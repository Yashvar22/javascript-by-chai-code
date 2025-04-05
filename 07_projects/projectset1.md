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
