let a = (prompt('Enter a side (only numbers > 0)'));
let b = (prompt('Enter b side (only numbers > 0)'));
let c = (prompt('Enter c side (only numbers > 0)'));

if (a.trim() === "" || b.trim() === "" || c.trim() === "") {
    alert('input values should be ONLY numbers');
} else {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('input values should be ONLY numbers');
    } else {
        if (a === 0 || b === 0 || c === 0) {
            alert('A triangle must have 3 sides with a positive definite length');
        } else {
            if (a + b < c || a + c < c || b + c < c) {
                alert('Triangle doesn’t exist');
            } else {
                if (a === b && b === c) {
                    console.log('Equilateral triangle');
                } else {
                    if (a === b || a === c || b === c) {
                        console.log('Isosceles triangle');
                    } else {
                        console.log('Scalene triangle')
                    }
                }
            }
        }
    }
}