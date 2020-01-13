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
    const filtersArray = [...array];
    const result = [];
    executeforEach(filtersArray, callback);
    for (let i = 0; i < array.length; i++) {
        if (filtersArray[i]) {
            result.push(array[i])
        }
    }
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
    for (let i = startNumber; i <= endNumber; i++) {
        result.push(i);
    }
    return result;
}

// console.log(makeListFromRange([2, 7]));

const getArrayOfKeys = (array, key) => {
    const result = [...array];
    executeforEach(result, (object) => object[key]);
    return result;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

// console.log(getArrayOfKeys(actors, 'name'));

const substitute = (array) => {
    return mapArray(array, (number) => number < 30 ? '*' : number);
}

// console.log(substitute([58, 14, 48, 2, 31, 29]));