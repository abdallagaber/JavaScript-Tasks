const nameInput = document.getElementById("fullName");
const nameMsg = document.getElementById("nameMsg");
const pass = document.getElementById("pass");
const rpass = document.getElementById("rpass");
const passMsg = document.getElementById("passMsg");

nameInput.addEventListener("focus", function () {
  nameInput.style.border = "solid 1px blue";
});

nameInput.addEventListener("blur", function () {
  nameInput.style.border = "";
  if (nameInput.value.trim().length < 3) {
    nameMsg.classList.add("visible");
    nameInput.style.backgroundColor = "gray";
  } else {
    nameMsg.classList.remove("visible");
    nameInput.style.backgroundColor = "white";
  }
});

rpass.addEventListener("blur", function () {
  if (pass.value == "" || pass.value == "" || pass.value !== rpass.value) {
    passMsg.classList.add("visible");
    rpass.style.backgroundColor = "gray";
  } else {
    passMsg.classList.remove("visible");
    rpass.style.backgroundColor = "white";
  }
});
