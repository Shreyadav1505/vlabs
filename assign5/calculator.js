// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function calculateTriangleArea() {
//     rl.question("Enter the length of the first side: ", (a) => {
//         rl.question("Enter the length of the second side: ", (b) => {
//             rl.question("Enter the length of the third side: ", (c) => {
//                 const side1 = parseFloat(a);
//                 const side2 = parseFloat(b);
//                 const side3 = parseFloat(c);

//                 const s = (side1 + side2 + side3) / 2; // semi-perimeter
//                 const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

//                 console.log(`The area of the triangle is ${area.toFixed(2)}`);
//                 main(); // Call main again after completion
//             });
//         });
//     });
// }

// function calculateCircleArea() {
//     rl.question("Enter the radius of the circle: ", (radius) => {
//         const r = parseFloat(radius);
//         const area = Math.PI * Math.pow(r, 2);

//         console.log(`The area of the circle is ${area.toFixed(2)}`);
//         main(); 
//     });
// }

// // Function to find all vowels in a string
// function findVowels() {
//     rl.question("Enter a string: ", (str) => {
//         const vowels = str.match(/[aeiouAEIOU]/gi);

//         if (vowels) {
//             console.log(`Vowels found: ${vowels.join(', ')}`);
//         } else {
//             console.log("No vowels found.");
//         }
//         main();
//     });
// }

// function calculateSimpleInterest() {
//     rl.question("Enter the principal amount: ", (principal) => {
//         rl.question("Enter the interest rate (%): ", (rate) => {
//             rl.question("Enter the time (years): ", (time) => {
//                 const p = parseFloat(principal);
//                 const r = parseFloat(rate);
//                 const t = parseFloat(time);

//                 const interest = (p * r * t) / 100;

//                 console.log(`The simple interest is ${interest.toFixed(2)}`);
//                 main();
//         });
//     });
// }


// function isPrime() {
//     rl.question("Enter a number: ", (num) => {
//         const n = parseInt(num);
//         if (isNaN(n) || n < 2) {
//             console.log(`${n} is not a prime number.`);
//             main(); 
//             return;
//         }

//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(`${n} is a prime number.`);
//         } else {
//             console.log(`${n} is not a prime number.`);
//         }
//         main(); 
//     });
// }

// function calculateFactorial() {
//     rl.question("Enter a number: ", (num) => {
//         const n = parseInt(num);
//         if (isNaN(n) || n < 0) {
//             console.log("Please enter a non-negative integer.");
//             main();
//             return;
//         }

//         let factorial = 1;
//         for (let i = 1; i <= n; i++) {
//             factorial *= i;
//         }

//         console.log(`The factorial of ${n} is ${factorial}`);
//         main();
//     });
// }

// function main() {
//     console.log("\nChoose a calculation:");
//     console.log("1: Area of a Triangle");
//     console.log("2: Area of a Circle");
//     console.log("3: Find Vowels in a String");
//     console.log("4: Calculate Simple Interest");
//     console.log("5: Prime Number Checker");
//     console.log("6: Factorial Calculator");
//     console.log("0: Exit");

//     rl.question("Enter your choice (0-6): ", (choice) => {
//         switch (choice) {
//             case '1':
//                 calculateTriangleArea();
//                 break;
//             case '2':
//                 calculateCircleArea();
//                 break;
//             case '3':
//                 findVowels();
//                 break;
//             case '4':
//                 calculateSimpleInterest();
//                 break;
//             case '5':
//                 isPrime();
//                 break;
//             case '6':
//                 calculateFactorial();
//                 break;
//             case '0':
//                 console.log("Exiting the program.");
//                 rl.close();
//                 break;
//             default:
//                 console.log("Invalid choice. Please enter a number between 0 and 6.");
//                 main(); 
//         }
//     });
// }

// main();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTriangleArea() {
    rl.question("Enter the length of the first side: ", (a) => {
        rl.question("Enter the length of the second side: ", (b) => {
            rl.question("Enter the length of the third side: ", (c) => {
                const side1 = parseFloat(a);
                const side2 = parseFloat(b);
                const side3 = parseFloat(c);

                const s = (side1 + side2 + side3) / 2; 
                const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

                console.log(`The area of the triangle is ${area.toFixed(2)}`);
                main(); 
            });
        });
    });
}

function calculateCircleArea() {
    rl.question("Enter the radius of the circle: ", (radius) => {
        const r = parseFloat(radius);
        const area = Math.PI * Math.pow(r, 2);

        console.log(`The area of the circle is ${area.toFixed(2)}`);
        main(); 
    });
}

function findVowels() {
    rl.question("Enter a string: ", (str) => {
        const vowels = str.match(/[aeiouAEIOU]/gi);

        if (vowels) {
            console.log(`Vowels found: ${vowels.join(', ')}`);
        } else {
            console.log("No vowels found.");
        }
        main(); 
    });
}

function calculateSimpleInterest() {
    rl.question("Enter the principal amount: ", (principal) => {
        rl.question("Enter the interest rate (%): ", (rate) => {
            rl.question("Enter the time (years): ", (time) => {
                const p = parseFloat(principal);
                const r = parseFloat(rate);
                const t = parseFloat(time);

                const interest = (p * r * t) / 100;

                console.log(`The simple interest is ${interest.toFixed(2)}`);
                main(); 
            });
        });
    });
}

function isPrime() {
    rl.question("Enter a number: ", (num) => {
        const n = parseInt(num);
        if (isNaN(n) || n < 2) {
            console.log(`${n} is not a prime number.`);
            main(); 
            return;
        }

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${n} is a prime number.`);
        } else {
            console.log(`${n} is not a prime number.`);
        }
        main(); 
    });
}

function calculateFactorial() {
    rl.question("Enter a number: ", (num) => {
        const n = parseInt(num);
        if (isNaN(n) || n < 0) {
            console.log("Please enter a non-negative integer.");
            main(); 
            return;
        }

        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }

        console.log(`The factorial of ${n} is ${factorial}`);
        main(); 
    });
}

function main() {
    console.log("\nChoose a calculation:");
    console.log("1: Area of a Triangle");
    console.log("2: Area of a Circle");
    console.log("3: Find Vowels in a String");
    console.log("4: Calculate Simple Interest");
    console.log("5: Prime Number Checker");
    console.log("6: Factorial Calculator");
    console.log("0: Exit");

    rl.question("Enter your choice (0-6): ", (choice) => {
        switch (choice) {
            case '1':
                calculateTriangleArea();
                break;
            case '2':
                calculateCircleArea();
                break;
            case '3':
                findVowels();
                break;
            case '4':
                calculateSimpleInterest();
                break;
            case '5':
                isPrime();
                break;
            case '6':
                calculateFactorial();
                break;
            case '0':
                console.log("Exiting the program.");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please enter a number between 0 and 6.");
                main();
        }
    });
}

main();
