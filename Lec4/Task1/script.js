const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"
);
const parent = document.getElementById("parent");
parent.appendChild(img);
parent.appendChild(img);
parent.insertBefore(img, parent.firstChild);
alert(parent.childNodes.length);
// it will be 1 because the img is moved, not cloned
parent.removeChild(img);
