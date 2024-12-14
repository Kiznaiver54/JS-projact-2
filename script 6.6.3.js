let userInput = prompt("Введите любое число:");

let number = Number(userInput);

if (!isNaN(number) && number >= 0) {
    let numberArray = [];
    for (let i = 0; i <= number; i += 1) {
        numberArray.push(i);
    }

    console.log(numberArray);
} 
