module.exports = function reverse (n) {
    if (n < 0) {
        isNegative = true;
        n = Math.abs(n);
    }
    let reversedString = String(n).split('').reverse().join('');
    return reversedNumber = Number(reversedString);
}
