const countCharacters = () => {
  let userInput;
  do {
    userInput = prompt("Please enter your string:");
  } while (userInput === null || userInput.trim() === "");

  let char;
  do {
    char = prompt("Please enter the character to count:");
  } while (char === null || char.trim() === "" || char.length !== 1);

  const isSensitive = confirm(
    "Should the count be case sensitive? Click 'OK' for Yes and 'Cancel' for No."
  );

  let count = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (isSensitive) {
      if (userInput[i] === char) {
        count++;
      }
    } else {
      if (userInput[i].toLowerCase() === char.toLowerCase()) {
        count++;
      }
    }
  }

  alert(`The character "${char}" appears ${count} times in the string.`);
};

const isPlaidindrome = () => {
  let userInput;
  do {
    userInput = prompt("Please enter a string to check for palindrome:");
  } while (userInput === null || userInput.trim() === "");
  const isSensitive = confirm(
    "Should the check be case sensitive? Click 'OK' for Yes and 'Cancel' for No."
  );
  let processedString = isSensitive ? userInput : userInput.toLowerCase();
  const reversedString = processedString.split("").reverse().join("");
  if (processedString === reversedString) {
    alert(`The string "${userInput}" is a palindrome.`);
  } else {
    alert(`The string "${userInput}" is not a palindrome.`);
  }
};

const findLongestWord = () => {
  let userInput;
  do {
    userInput = prompt("Please enter a sentence:");
  } while (userInput === null || userInput.trim() === "");
  const words = userInput.trim().split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  alert(
    `The longest word is "${longestWord}" with length ${longestWord.length}.`
  );
};

const printUserInfor = () => {
  let name;
  do {
    name = prompt("Please enter your name:");
  } while (name === null || name.trim() === "");

  let phone;
  do {
    phone = prompt("Enter your phone number (8 digits):");
  } while (!/^[0-9]{8}$/.test(phone));

  let mobile;
  do {
    mobile = prompt(
      "Enter your mobile number (must start with 010/011/012 and be 11 digits):"
    );
  } while (!/^01(0|1|2)[0-9]{8}$/.test(mobile));

  let email;
  do {
    email = prompt("Enter your email (example: abc@123.com):");
  } while (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email));

  let color;
  do {
    color = prompt("Choose a color: red / green / blue");
  } while (!["red", "green", "blue"].includes(color.toLowerCase()));

  let today = new Date().toLocaleDateString();
  document.write(`
    <h2 style="color:${color};">
        Welcome ${name}! <br>
        Today’s date is: ${today}
    </h2>

    <p style="color:${color};">
        <strong>Your Information:</strong><br>
        Name: ${name}<br>
        Phone Number: ${phone}<br>
        Mobile Number: ${mobile}<br>
        Email: ${email}
    </p>
`);
};

// countCharacters();
// isPlaidindrome();
// findLongestWord();
printUserInfor();
