const nameInput = document.getElementById("fullName");
const nameMsg = document.getElementById("nameMsg");
const pass = document.getElementById("pass");
const rpass = document.getElementById("rpass");
const passMsg = document.getElementById("passMsg");

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
  if (pass.value == "" || rpass.value == "" || pass.value !== rpass.value) {
    passMsg.classList.add("visible");
    rpass.style.backgroundColor = "gray";
  } else {
    passMsg.classList.remove("visible");
    rpass.style.backgroundColor = "white";
  }
});

document.getElementById("regForm").onsubmit = function (e) {
  let checkValidation = true;

  if (nameInput.value.trim().length <= 3) {
    e.preventDefault();
    alert("Please correct name field");
    checkValidation = false;
  }

  if (pass.value !== rpass.value) {
    e.preventDefault();
    alert("Passwords do not match");
    checkValidation = false;
  }

  if (!checkValidation) return;

  e.preventDefault();
  setCookie("fullName", nameInput.value, 365);
  setCookie("email", document.getElementById("email").value, 365);
  setCookie("city", document.getElementById("city").value, 365);

  window.location.href = "./thankyou.html";
};
