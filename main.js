const builder = document.getElementById("builder");
const stars = document.getElementById("stars");
const reset = document.getElementById("reset");

//building pyramid
builder.addEventListener("click", () => {
  let hight = document.getElementById("lines").value;
  const field = document.getElementById("stars");
  const space = "&nbsp";
  const breackLine = "<br>";
  let shape = "#";
  let i = 0;

  hight > 25 || hight < 1
    ? alert("try again with a number between 1 && 25")
    : null;

  field.innerHTML = "";
  while (i <= hight && hight < 25 && hight >= 1) {
    field.innerHTML +=
      space.repeat(Math.round(hight / 2)) +
      "<span>" +
      shape +
      "<span />" +
      breackLine;
    hight--;
    shape += "#";
  }
});

//Builder triggered by clicking enter
document.getElementById("lines").addEventListener("keypress", (event) => {
  event.keyCode === 13 ? document.getElementById("builder").click() : null;
});

//reseting evrything to empty
reset.addEventListener("click", () => {
  const field = document.getElementById("stars");
  field.innerHTML = "";
  document.getElementById("lines").value = "";
});
