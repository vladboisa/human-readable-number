module.exports = function toReadable(number) {

    let result = [];

    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    if (number == 0) {
        result.push('zero');
    } else if (number >= 100) {
        result.push(numbers[Math.floor(number / 100)] + ' hundred');
        if (number % 100 >= 11 && number % 100 <= 19) {
            result.push(numbers[number % 100])
        } else {
            result.push(numbers[Math.floor((number % 100) / 10) * 10]);
            result.push(numbers[(number % 100) % 10]);
        }

    } else {
        if (number >= 11 && number <= 19) {
            result.push(numbers[number]);
        } else {
            result.push(numbers[Math.floor(number / 10) * 10]);
            result.push(numbers[number % 10]);
        }
    }
    result.forEach((el, i) => {
        if (el === undefined) {
            result.splice(i, 1)
        }
    })

    return result.join(' ').trim();
};