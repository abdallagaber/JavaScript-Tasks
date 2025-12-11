const images = [
  {
    url: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    desc: "This is HTML",
  },
  {
    url: "https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo.png",
    desc: "This is CSS",
  },
  {
    url: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
    desc: "This is JavaScript",
  },
];
const imgElement = document.createElement("img");
imgElement.style.width = "400px";
const descElement = document.createElement("p");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const container = document.getElementById("image-container");

container.appendChild(imgElement);
container.appendChild(descElement);

let counter = 0;

function updateImage() {
  imgElement.src = images[counter].url;
  descElement.innerText = images[counter].desc;
}

prevButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateImage();
  }
});

nextButton.addEventListener("click", () => {
  if (counter < images.length - 1) {
    counter++;
    updateImage();
  }
});
updateImage();
