const headings = () => {
  for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>Welcome to my page</h${i}>`);
  }
};
const weather = (temp) => (temp >= 30 ? "HOT" : "Cold");

const sum = () => {
  let sum = 0;

  while (sum <= 100) {
    let input = prompt("Enter a number (0 to stop):");

    if (isNaN(input) || input.trim() === "") {
      alert("Invalid input! Please enter a numeric value.");
      continue;
    }

    let number = Number(input);

    if (number === 0) {
      break;
    }

    sum += number;
  }

  alert("Total sum = " + sum);
};

const welcome = () => {
  alert("Welcome to my site");
  let name = prompt("Please enter your name:");
  document.write(`<strong>Hello ${name}</strong>`);
};

const checkDivisibility = (x, y, z) => {
  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
    console.log("All inputs must be numbers.");
    return;
  }

  let divisibleByY = x % y === 0;
  let divisibleByZ = x % z === 0;

  if (divisibleByY && divisibleByZ) {
    console.log(`${x} is divisible by both ${y} and ${z}.`);
  } else if (divisibleByY) {
    console.log(`${x} is divisible by ${y} only.`);
  } else if (divisibleByZ) {
    console.log(`${x} is divisible by ${z} only.`);
  } else {
    console.log(`${x} is not divisible by either ${y} or ${z}.`);
  }
};

const infoForm = () => {
  let name;
  while (!name) {
    name = prompt("Enter your name:");
    if (!name || name.trim() === "" || !isNaN(name)) {
      alert("Invalid input. Please enter a valid name.");
      name = null;
    }
  }
  let birthYear;
  while (!birthYear) {
    birthYear = prompt("Enter your birth year:");
    if (
      !birthYear ||
      birthYear.trim() === "" ||
      isNaN(birthYear) ||
      birthYear > 2010
    ) {
      alert("Invalid input. Please enter a valid birth year.");
      birthYear = null;
    }
  }
  let age = new Date().getFullYear() - Number(birthYear);

  document.write(`<p>Name: ${name}</p>`);
  document.write(`<p>Birth Year: ${birthYear}</p>`);
  document.write(`<p>Age: ${age}</p>`);
};

// headings();
// console.log(weather(35));
// sum();
// welcome();
// checkDivisibility(20, 12, 6);
infoForm();
