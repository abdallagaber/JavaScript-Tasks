const image = document.getElementById("image");
const main = document.getElementById("main");
image.addEventListener("click", () => {
  const imageClone = image.cloneNode(true);
  image.style.position = "absolute";
  image.style.top = 0;
  image.style.right = 0;
  imageClone.style.position = "absolute";
  imageClone.style.left = 0;
  imageClone.style.bottom = 0;
  main.appendChild(imageClone);
});
