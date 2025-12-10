const circleArea = () => {
  let radius;
  do {
    radius = prompt("Please enter a positive number for circle radius:");
  } while (radius <= 0 || isNaN(radius));
  const area = Math.PI * radius * radius;
  alert(`Total area of the circle is ${area.toFixed(2)}`);
};

const sqrt = () => {
  let number;
  do {
    number = prompt(
      "Please enter a non-negative number to find its square root:"
    );
  } while (number < 0 || isNaN(number));
  const result = Math.sqrt(number);
  alert(`Square root of ${number} is ${result.toFixed(2)}`);
};

const calculateCos = () => {
  let angle;
  do {
    angle = prompt("Please enter an angle in degrees to find its cosine:");
  } while (isNaN(angle));
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  document.write(`Cos ${angle}° degrees is ${cos.toFixed(2)}`);
};

const printOdds = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

const randomJSTips = () => {
  const tips = [
    "Use === instead of == for strict equality checks.",
    "Use const for variables that won't be reassigned.",
    "Use template literals for easier string interpolation.",
    "Use arrow functions for concise function expressions.",
    "Use array methods like map, filter, and reduce for cleaner code.",
    "Use destructuring to extract values from arrays and objects.",
    "Use the spread operator to copy or merge arrays and objects.",
    "Use async/await for cleaner asynchronous code.",
    "Use try/catch for error handling in asynchronous code.",
    "Use console.table() to display tabular data in the console.",
  ];
  const randomIndex = Math.floor(Math.random() * tips.length);
  alert(tips[randomIndex]);
};

const evaluateExpression = () => {
  const expr = prompt("Please enter a math expression :");
  try {
    let result = math.evaluate(expr);
    alert(`You entered: ${expr}, and the result is: ${result}`);
  } catch (error) {
    alert("Invalid expression. Please try again.");
  }
};

const studentArrayOperations = () => {
  const students = [
    { name: "Alice", degree: 90 },
    { name: "Bob", degree: 45 },
    { name: "Charlie", degree: 80 },
    { name: "David", degree: 49 },
    { name: "Eve", degree: 95 },
  ];
  console.log("First student who scored between 90 and 100:");
  let topStudent = students.find((s) => s.degree >= 90 && s.degree <= 100);
  console.log(`Name: ${topStudent.name}, Degree: ${topStudent.degree}`);

  console.log("students who scored below 60:");
  let lowScorers = students.filter((s) => s.degree < 60);
  lowScorers.forEach((s) => {
    console.log(`Name: ${s.name}, Degree: ${s.degree}`);
  });

  students.push({ name: "Abdalla", degree: 90 });
  console.log("All Students (After push):");
  students.forEach((s) => {
    console.log(`Name: ${s.name}, Degree: ${s.degree}`);
  });

  students.pop();
  console.log("After removing last student:");
  students.forEach((s) => {
    console.log(`Name: ${s.name}, Degree: ${s.degree}`);
  });

  students.sort();
  console.log("After sorting students:");
  students.forEach((s) => {
    console.log(`Name: ${s.name}, Degree: ${s.degree}`);
  });

  students.splice(
    2,
    0,
    { name: "Ahmed", degree: 75 },
    { name: "Ebrahim", degree: 85 }
  );
  console.log("After adding two new students:");
  students.forEach((s) => {
    console.log(`Name: ${s.name}, Degree: ${s.degree}`);
  });

  students.splice(3, 1);
  console.log("After removing one student:");
  students.forEach((s) => {
    console.log(`Name: ${s.name}, Degree: ${s.degree}`);
  });
};

// -----------------------------------  Task 7.1   -----------------------------------

// 1st function using for loop
const reverseParams2 = (...args) => {
  return args.reverse();
};
console.log(reverseParams2("a", "b", "c"));

// 2nd function using arguments object
const reverseParams1 = (...args) => {
  let reversed = [];
  for (let i = args.length - 1; i >= 0; i--) {
    reversed.push(args[i]);
  }
  return reversed;
};
console.log(reverseParams1(1, 2, 3, 4));

// -----------------------------------  Task 7.2   -----------------------------------

const onlyTwoParams = (...args) => {
  try {
    if (args.length < 2 || args.length > 2) {
      throw new Error("Function must be called with exactly 2 parameters.");
    }

    return [args[0], args[1]];
  } catch (err) {
    console.log("Error:", err.message);
  }
};
onlyTwoParams(5);
onlyTwoParams(5, 10, 15);
console.log(onlyTwoParams(10, 20));

// -----------------------------------  Task 7.3  -----------------------------------

const addNumbers = (...nums) => {
  if (nums.length === 0) {
    throw new Error("You must pass at least one number");
  }

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number" || Number.isNaN(nums[i])) {
      throw new TypeError(`Argument at index ${i} is not a valid number`);
    }
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
};

console.log("Testing with valid numbers:");
try {
  console.log(addNumbers(5, 10, 20));
  console.log(addNumbers(1, "2", 3));
} catch (err) {
  console.error(err);
}

console.log("Testing with no arguments:");
try {
  console.log(addNumbers());
} catch (err) {
  console.error(err);
}

// circleArea();
// sqrt();
// calculateCos();
// printOdds(1, 20);
// randomJSTips();
// evaluateExpression();
// studentArrayOperations();
