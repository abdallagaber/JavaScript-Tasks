const showMsgBtn = document.getElementById("showMsgBtn");
let counter = 5;

showMsgBtn.addEventListener("click", () => {
  const msgWindow = window.open("", "", "width=400,height=400");
  msgWindow.document.body.innerHTML = `<h2>Hello this window will destroy in ${counter} seconds</h2>`;
  const countdownInterval = setInterval(() => {
    counter--;
    if (counter > 0) {
      msgWindow.document.body.innerHTML = `<h2>Hello this window will destroy in ${counter} seconds</h2>`;
    } else {
      clearInterval(countdownInterval);
      msgWindow.close();
    }
  }, 1000);
});
