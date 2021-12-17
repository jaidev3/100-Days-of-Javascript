/////////////logic///////////////////////////////

let text = document.getElementsByTagName("h2")[1];
let add = () => {
  let color= "#" + Math.random().toString(16).substring(2,8);
  text.innerText =color;
  document.body.style.background=color;
};

////////////////////////////////////////////////////////////////////////////

let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", add);