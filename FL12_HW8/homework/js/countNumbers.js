const makeNumber = (string) => {
    return string.split('').reduce((acc, letter) => acc + (!isNaN(letter) ? letter : ""), "");
}

const countNumbers = (string) => {
    return makeNumber(string).split('').reduce((acc, number) => {
        acc[number] = acc[number] ? acc[number] + 1 : 1
        return acc;
    }, {});
}

console.log(countNumbers('jdjjka000466588kkkfs662555'));