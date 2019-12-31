const getMin = (...args) => {
    if (args.length === 0) {
        return;
    }
    let minValue = args[0];
    if (args.length === 1) {
        return minValue;
    }
    for (let i = 1; i < args.length; i++) {
        minValue = args[i] < minValue ? args[i] : minValue;
    }
    return minValue;
}

console.log(getMin(5, 1, 3));