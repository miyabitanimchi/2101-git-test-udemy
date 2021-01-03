const number1 = 111;
const number2 = 236;
const number3 = 5;

const getMax = (a, b, c) => {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;

}

const max = getMax(number1, number2, number3);
console.log(`The maximum value is ${max}`);

