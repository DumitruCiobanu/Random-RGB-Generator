const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

let r;
let g;
let b;

btn.addEventListener("click", function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
  btn.innerText = "Change color";
  h1.style.color = changeColor();
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const changeColor = () => {
  if (r < 150 && g < 150 && b < 150) {
    return "white";
  }
  return "black";
};
