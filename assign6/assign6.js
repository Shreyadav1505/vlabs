const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function calculateSeriesSum() {
    const type = (await getInput("Enter the type of series (AP/GP): ")).toUpperCase();
    const n = parseInt(await getInput("Enter the number of terms in the series: "));
    const a = parseFloat(await getInput("Enter the first term: "));
    const r = parseFloat(await getInput("Enter the common difference (for AP) or common ratio (for GP): "));

    let sum = 0;

    if (type === "AP") {
        sum = (n / 2) * (2 * a + (n - 1) * r);
    } else if (type === "GP") {
        if (r === 1) {
            sum = n * a;
        } else {
            sum = a * (Math.pow(r, n) - 1) / (r - 1);
        }
    } else {
        console.log("Invalid series type. Please enter 'AP' or 'GP'.");
        return;
    }

    console.log(`The sum of the ${type} series is ${sum}`);
}

async function binarySearch() {
    const arrInput = await getInput("Enter a sorted array of numbers separated by spaces: ");
    const arr = arrInput.split(" ").map(Number);
    const target = parseFloat(await getInput("Enter the target number: "));

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log(`Element found at index ${mid}`);
            return;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log("Element not found");
}

async function multiplyMatrices() {
    const rowsA = parseInt(await getInput("Enter the number of rows in the first matrix: "));
    const colsA = parseInt(await getInput("Enter the number of columns in the first matrix: "));
    const rowsB = parseInt(await getInput("Enter the number of rows in the second matrix: "));
    const colsB = parseInt(await getInput("Enter the number of columns in the second matrix: "));

    if (colsA !== rowsB) {
        console.log("Matrix multiplication is not possible.");
        return;
    }

    const matrixA = [];
    const matrixB = [];

    console.log("Enter the elements of the first matrix:");
    for (let i = 0; i < rowsA; i++) {
        const row = (await getInput(`Row ${i + 1}: `)).split(" ").map(Number);
        matrixA.push(row);
    }

    console.log("Enter the elements of the second matrix:");
    for (let i = 0; i < rowsB; i++) {
        const row = (await getInput(`Row ${i + 1}: `)).split(" ").map(Number);
        matrixB.push(row);
    }

    const result = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    console.log("Matrix multiplication result:");
    console.table(result);
}

async function twoSum() {
    const arrInput = await getInput("Enter an array of numbers separated by spaces: ");
    const arr = arrInput.split(" ").map(Number);
    const target = parseFloat(await getInput("Enter the target number: "));

    const numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (numMap.has(complement)) {
            console.log(`Two numbers that add up to ${target} are at indices ${numMap.get(complement)} and ${i}`);
            return;
        }

        numMap.set(arr[i], i);
    }

    console.log("No solution found");
}

async function main() {
    let choice;
    do {
        console.log("\nChoose an option:");
        console.log("1: Calculate sum of an AP/GP series");
        console.log("2: Perform binary search");
        console.log("3: Multiply two matrices");
        console.log("4: Solve 'Two Sum' problem");
        console.log("0: Exit");

        choice = await getInput("Enter your choice (0-4): ");

        switch (choice) {
            case '1':
                await calculateSeriesSum();
                break;
            case '2':
                await binarySearch();
                break;
            case '3':
                await multiplyMatrices();
                break;
            case '4':
                await twoSum();
                break;
            case '0':
                console.log("Exiting the program.");
                break;
            default:
                console.log("Invalid choice. Please enter a number between 0 and 4.");
        }
    } while (choice !== '0');

    rl.close();
}

main();
