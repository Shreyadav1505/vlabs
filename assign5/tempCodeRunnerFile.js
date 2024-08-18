function calculateTriangleArea() {
    const a = prompt("Enter the length of the first side:");
    // const a= readInt("Enter side 1");

    const b = parseFloat(prompt("Enter the length of the second side:"));
    const c = parseFloat(prompt("Enter the length of the third side:"));

    // Heron's formula
    const s = (a + b + c) / 2; // semi-perimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    alert(`The area of the triangle is ${area.toFixed(2)}`);
}
function calculateCircleArea() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    const area = Math.PI * Math.pow(radius, 2);
    
    alert(`The area of the circle is ${area.toFixed(2)}`);
}
function findVowels() {
    const str = prompt("Enter a string:");
    const vowels = str.match(/[aeiou]/gi);
    
    if (vowels) {
        alert(`Vowels found: ${vowels.join(', ')}`);
    } else {
        alert("No vowels found.");
    }
}
function findVowels() {
    const str = prompt("Enter a string:");
    const vowels = str.match(/[aeiou]/gi);
    
    if (vowels) {
        alert(`Vowels found: ${vowels.join(', ')}`);
    } else {
        alert("No vowels found.");
    }
}
function calculateSimpleInterest() {
    const principal = parseFloat(prompt("Enter the principal amount:"));
    const rate = parseFloat(prompt("Enter the interest rate (%):"));
    const time = parseFloat(prompt("Enter the time (years):"));
    
    const interest = (principal * rate * time) / 100;
    
    alert(`The simple interest is ${interest.toFixed(2)}`);
}
function isPrime() {
    const num = parseInt(prompt("Enter a number:"));
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        alert(`${num} is a prime number.`);
    } else {
        alert(`${num} is not a prime number.`);
    }
}
function calculateFactorial() {
    const num = parseInt(prompt("Enter a number:"));
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    
    alert(`The factorial of ${num} is ${factorial}`);
}
calculateTriangleArea();
calculateCircleArea();
findVowels();
calculateSimpleInterest();
isPrime();
calculateFactorial();