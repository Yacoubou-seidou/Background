let firstColorInput = document.getElementById("first-color");
let secondColorInput = document.getElementById("second-color");
let displayCode = document.getElementById("les-couleurs");
function genereColor() {
  let color1 = firstColorInput.value;
  let color2 = secondColorInput.value;
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  displayCode.textContent = `linear-gradient(to right,${color1}, ${color2})`;
}
firstColorInput.addEventListener("input", genereColor);
secondColorInput.addEventListener("input", genereColor);
