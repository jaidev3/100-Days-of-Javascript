let text = document.getElementsByTagName("h2")[1];
let add = () => {
  return (text.innerText = Math.ceil(Math.random() * 100));
};
let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", add);
