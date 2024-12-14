function isPalindrome(word) {
    const reversedWord = prompt("Введите слово:")
    if (word === reversedWord) {
        console.log(`Слово ${word} является палиндромом.`);
    } else {
        console.log(`Слово ${word} не является палиндромом.`);
    }
}


isPalindrome('Довод'); 
isPalindrome('Сантимент'); 