// // main.ts
// // Function to get the length of a string
// function getStringLength(str: string): number {
//     return str.length;
// }
// // Function to concatenate two strings
// function concatenateStrings(str1: string, str2: string): string {
//     return str1.concat(str2);
// }
// // Function to get a character at a specific position
// function getCharAt(str: string, index: number): string {
//     return str.charAt(index);
// }
// // Function to get the Unicode of the character at a specific position
// function getCharCodeAt(str: string, index: number): number {
//     return str.charCodeAt(index);
// }
// // Function to get a substring
// function getSubstring(str: string, start: number, length: number): string {
//     return str.substr(start, length);
// }
// // Function to replace a substring with another substring
// function replaceSubstring(str: string, find: string, replaceWith: string): string {
//     return str.replace(find, replaceWith);
// }
// // Event listener to connect UI with functions
// document.addEventListener("DOMContentLoaded", () => {
//     const resultElement = document.getElementById('result') as HTMLDivElement;
//     document.getElementById('lengthBtn')?.addEventListener('click', () => {
//         const str = (document.getElementById('stringInput') as HTMLInputElement).value;
//         resultElement.textContent = `Length: ${getStringLength(str)}`;
//     });
//     document.getElementById('concatBtn')?.addEventListener('click', () => {
//         const str1 = (document.getElementById('stringInput1') as HTMLInputElement).value;
//         const str2 = (document.getElementById('stringInput2') as HTMLInputElement).value;
//         resultElement.textContent = `Concatenated: ${concatenateStrings(str1, str2)}`;
//     });
//     document.getElementById('charAtBtn')?.addEventListener('click', () => {
//         const str = (document.getElementById('stringInput') as HTMLInputElement).value;
//         const index = parseInt((document.getElementById('indexInput') as HTMLInputElement).value, 10);
//         resultElement.textContent = `Character at index ${index}: ${getCharAt(str, index)}`;
//     });
//     document.getElementById('charCodeAtBtn')?.addEventListener('click', () => {
//         const str = (document.getElementById('stringInput') as HTMLInputElement).value;
//         const index = parseInt((document.getElementById('indexInput') as HTMLInputElement).value, 10);
//         resultElement.textContent = `Unicode at index ${index}: ${getCharCodeAt(str, index)}`;
//     });
//     document.getElementById('substrBtn')?.addEventListener('click', () => {
//         const str = (document.getElementById('stringInput') as HTMLInputElement).value;
//         const start = parseInt((document.getElementById('startIndexInput') as HTMLInputElement).value, 10);
//         const length = parseInt((document.getElementById('lengthInput') as HTMLInputElement).value, 10);
//         resultElement.textContent = `Substring: ${getSubstring(str, start, length)}`;
//     });
//     document.getElementById('replaceBtn')?.addEventListener('click', () => {
//         const str = (document.getElementById('stringInput') as HTMLInputElement).value;
//         const find = (document.getElementById('findInput') as HTMLInputElement).value;
//         const replaceWith = (document.getElementById('replaceInput') as HTMLInputElement).value;
//         resultElement.textContent = `Replaced: ${replaceSubstring(str, find, replaceWith)}`;
//     });
// });
function performOperation() {
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;
    var operation = document.getElementById("operation").value;
    var result = "";
    switch (operation) {
        case "length":
            result = "Length of the first string is ".concat(string1.length);
            break;
        case "concat":
            result = "Concatenation result: ".concat(string1.concat(string2));
            break;
        case "charAt":
            var index = parseInt(string2);
            if (!isNaN(index) && index >= 0 && index < string1.length) {
                result = "Character at index ".concat(index, ": ").concat(string1.charAt(index));
            }
            else {
                result = "Invalid index for charAt operation.";
            }
            break;
        case "charCodeAt":
            var charCodeIndex = parseInt(string2);
            if (!isNaN(charCodeIndex) && charCodeIndex >= 0 && charCodeIndex < string1.length) {
                result = "Character code at index ".concat(charCodeIndex, ": ").concat(string1.charCodeAt(charCodeIndex));
            }
            else {
                result = "Invalid index for charCodeAt operation.";
            }
            break;
        case "substr":
            var substrStart = parseInt(string2);
            if (!isNaN(substrStart) && substrStart >= 0 && substrStart < string1.length) {
                result = "Substring from index ".concat(substrStart, ": ").concat(string1.substr(substrStart));
            }
            else {
                result = "Invalid start index for substr operation.";
            }
            break;
        case "indexOf":
            result = "Index of \"".concat(string2, "\" in the first string: ").concat(string1.indexOf(string2));
            break;
        default:
            result = "Invalid operation selected.";
            break;
    }
    document.getElementById("result").innerText = result.toString();
}
