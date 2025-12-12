const openWindowButton = document.getElementById("openWindow");
const stopMovementButton = document.getElementById("stopMovement");

let childWindow;
let moveInterval;
let moveByY = 50;

openWindowButton.addEventListener("click", () => {
  childWindow = window.open("", "", "width=400,height=400");
  childWindow.document.write("<h1>Moving Window</h1>");
  moveByY = 50;
  moveInterval = setInterval(() => {
    if (childWindow.closed) {
      clearInterval(moveInterval);
      return;
    }

    childWindow.moveBy(0, moveByY);

    const screenHeight = window.screen.availHeight;
    const windowTop = childWindow.screenY;
    const windowHeight = childWindow.outerHeight;
    if (windowTop + windowHeight >= screenHeight || windowTop <= 0) {
      moveByY *= -1;
    }
  }, 500);
});

stopMovementButton.addEventListener("click", () => {
  clearInterval(moveInterval);
});
