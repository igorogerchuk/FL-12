const convert = (...args) => {
    const result = [];
    for (let i = 0; i < args.length; i++) {
        result[i] = typeof (args[i]) === "string" ? +args[i] : `${args[i]}`;
    }
    return result;
}

console.log(convert('1', 2, 3, '4'));

const executeforEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
}

executeforEach([1, 2, 3], function (el) { console.log(el * 2) })

const mapArray = (array, callback) => {
    const result = array;
    executeforEach(result, (element) => isNaN(+element) ? element : +element);
    executeforEach(result, callback);
    return result;
}

console.log(mapArray([2, '5', 8], function (el) { return el + 3 }));