const isLeapYear = (inputDate) => {
    const date = new Date(inputDate);
    let year = date.getFullYear();
    if (isNaN(year)) {
        return 'Invalid Date'
    }
    if (new Date(year, 1, 29).getDate() === 29) {
        return `${year} is a leap year`;
    }
    return `${year} is not a leap year`;
}

console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear('2200-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));
