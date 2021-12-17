let text = document.getElementsByTagName("h2")[1];
let add = () => {
  return (text.innerText = Number(text.innerText) + 1);
};
let reset = () => {
  return (text.innerText = 0);
};
let subtract = () => {
  return (text.innerText = Number(text.innerText) - 1);
};
let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", add);
btn[1].addEventListener("click", reset);
btn[2].addEventListener("click", subtract);
