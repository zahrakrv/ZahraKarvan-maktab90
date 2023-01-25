`use strict`;
let arr = [];

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  console.log(obj);
  showNotification(obj);
});

const span = document.getElementById("span");
function showNotification(obj) {
  span.textContent = `${obj.html}`;

  const styleH = {
    opacity: "100%",
    position: "absolute",
    right: `${obj.right}px`,
    top: `${obj.top}px`,
  };
  Object.assign(span.style, styleH);
}
