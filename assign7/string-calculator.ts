function performOperation(): void {
    const string1 = (document.getElementById("string1") as HTMLInputElement).value;
    const string2 = (document.getElementById("string2") as HTMLInputElement).value;
    const operation = (document.getElementById("operation") as HTMLSelectElement).value;
    let result: string | number = "";

    switch (operation) {
        case "length":
            result = `Length of the first string is ${string1.length}`;
            break;
        case "concat":
            result = `Concatenation result: ${string1.concat(string2)}`;
            break;
        case "charAt":
            const index = parseInt(string2);
            if (!isNaN(index) && index >= 0 && index < string1.length) {
                result = `Character at index ${index}: ${string1.charAt(index)}`;
            } else {
                result = "Invalid index for charAt operation.";
            }
            break;
        case "charCodeAt":
            const charCodeIndex = parseInt(string2);
            if (!isNaN(charCodeIndex) && charCodeIndex >= 0 && charCodeIndex < string1.length) {
                result = `Character code at index ${charCodeIndex}: ${string1.charCodeAt(charCodeIndex)}`;
            } else {
                result = "Invalid index for charCodeAt operation.";
            }
            break;
        case "substr":
            const substrStart = parseInt(string2);
            if (!isNaN(substrStart) && substrStart >= 0 && substrStart < string1.length) {
                result = `Substring from index ${substrStart}: ${string1.substr(substrStart)}`;
            } else {
                result = "Invalid start index for substr operation.";
            }
            break;
        case "indexOf":
            result = `Index of "${string2}" in the first string: ${string1.indexOf(string2)}`;
            break;
        default:
            result = "Invalid operation selected.";
            break;
    }

    (document.getElementById("result") as HTMLDivElement).innerText = result.toString();
}
