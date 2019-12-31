const makeNumber = (string) => {
    return string.split('').reduce((acc, letter) => acc + (!isNaN(letter) ? letter : ""), "");
}

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('ijifjgdj'));
