
const ROMAN_NUMERALS_OBJECT = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}


export default class RomanNumeralsConverter {

    constructor(number) {
        this.number = +number;
        this.romanObject = ROMAN_NUMERALS_OBJECT;
    }

    romanConverter = function run() {
        let str = '';
        let number = this.number;

        if (isNaN(number)) {
            return 'please enter a number'
        }

        if (number < 1 || number > 3999) {
            return 'please enter a number between 1 and 3999'
        }


        const decKeys = Object.keys(ROMAN_NUMERALS_OBJECT).reverse();

        decKeys.forEach(key => {
            while (key <= number) {
                str += ROMAN_NUMERALS_OBJECT[key];
                number -= key;
            }
        });

        return str;


    }
}








