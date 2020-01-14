const convert = (...args) => {
    const result = [];
    for (let i = 0; i < args.length; i++) {
        result[i] = typeof args[i] === 'string' ? +args[i] : `${args[i]}`;
    }
    return result;
}

// console.log(convert('1', 2, 3, '4'));

const executeforEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
}

// executeforEach([1, 2, 3], function (el) {
//     console.log(el * 2)
// })

const mapArray = (array, callback) => {
    const result = [...array];
    executeforEach(result, (element) => isNaN(+element) ? element : +element);
    executeforEach(result, callback);
    return result;
}

// console.log(mapArray([2, '5', 8], function (el) { return el + 3 }));

const filterArray = (array, callback) => {
    const result = [];
    executeforEach(array, element => {
        if (callback(element)) {
            result.push(element)
        }
        return element;
    });
    return result;
}

// console.log(filterArray([2, 5, 8], function (el) { return el % 2 === 0 }));

const flipOver = (string) => {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

// console.log(flipOver('hey world'));

const makeListFromRange = ([startNumber, endNumber]) => {
    let result = [];
    let count = startNumber < endNumber ? 1 : -1;
    while (startNumber !== endNumber) {
        result.push(startNumber);
        startNumber += count;
    }
    return result;
}

// console.log(makeListFromRange([7, 2]));

const getArrayOfKeys = (array, key) => {
    const result = [...array];
    executeforEach(result, (object) => object[key]);
    return result;
}

// const actors = [
//     { name: 'tommy', age: 36 },
//     { name: 'lee', age: 28 }
// ];

// console.log(getArrayOfKeys(actors, 'name'));

const substitute = (array) => {
    return mapArray(array, (number) => number < 30 ? '*' : number);
}

// console.log(substitute([58, 14, 48, 2, 31, 29]));

const getPastDay = (date, days) => {
    if (!(date instanceof Date)) {
        return;
    }
    const pastDate = new Date(date);
    pastDate.setDate(date.getDate() - days);
    // const pastDate = new Date(date - days * 86400000);
    return pastDate.getDate();
}

// const date = new Date(2019, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2018)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2018)

const formatDate = (date) => {
    if (!(date instanceof Date)) {
        return;
    }
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
}

// console.log(formatDate(new Date('6/15/2018 09:15:00'))); // "2018/6/15 09:15"
// console.log(formatDate(new Date()));
