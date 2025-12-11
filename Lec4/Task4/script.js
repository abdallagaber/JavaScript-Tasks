const sample = document.getElementById("sample");
document.querySelectorAll("input").forEach((radio) => {
  radio.addEventListener("change", (e) => {
    sample.style[e.target.name] = e.target.value;
  });
});
