document.addEventListener("keydown", function (e) {
  const keyName = e.key;
  alert(`You pressed the "${keyName}" key.\nASCII code: ${e.keyCode}`);
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Right-click blocked.");
});
