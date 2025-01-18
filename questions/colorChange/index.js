const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

const changeColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let IntervalID;
const changeStart = function () {
  // console.log(changeColor())
  if (!IntervalID) {
    IntervalID = setInterval(bodyColor, 1000);
  }
  function bodyColor() {
    body.style.backgroundColor = changeColor();
    console.log('clicked');
  }
};

const changeStop = function () {
  clearInterval(IntervalID);
  IntervalID = null;
};

start.addEventListener('click', changeStart);
stop.addEventListener('click', changeStop);
