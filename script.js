// Arrow function to divide two numbers using a Promise
const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};

// Case 1: Normal division
divide(10, 2)
    .then((result) => {
        console.log("Dividing 10 by 2...");
        console.log("Result: " + result);
    })
    .catch((error) => {
        console.log(error);
    });

// Case 2: Division by zero
divide(10, 0)
    .then((result) => {
        console.log("Dividing 10 by 0...");
        console.log("Result: " + result);
    })
    .catch((error) => {
        console.log("Dividing 10 by 0...");
        console.log(error);
    });

// Case 3: Another normal division
divide(25, 5)
    .then((result) => {
        console.log("Dividing 25 by 5...");
        console.log("Result: " + result);
    })
    .catch((error) => {
        console.log(error);
    });

// Case 4: Decimal result output
divide(7, 2)
    .then((result) => {
        console.log("Dividing 7 by 2...");
        console.log("Result: " + result);
    })
    .catch((error) => {
        console.log(error);
    });

// Case 5: Zero divided by a number
divide(0, 4)
    .then((result) => {
        console.log("Dividing 0 by 4...");
        console.log("Result: " + result);
    })
    .catch((error) => {
        console.log(error);
    });