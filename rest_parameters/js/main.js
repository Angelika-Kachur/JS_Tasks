//Rest Parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(1,2,3,4,5));