function addOne(x) {
    return x + 1;
}

const pipe = (number, ...funcs) => {
    if (funcs.length === 0) {
        return;
    }
    if (funcs.length === 1) {
        return funcs[0](number);
    }
    let result = funcs[0](number);
    for (let i = 1; i < funcs.length; i++) {
        result = funcs[i](result);
    }
    return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));  
