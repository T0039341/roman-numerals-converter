
var methods = {}



methods.romanConverter = function run(n) {
    /*
     * Write your code below; return type and arguments should be according to the problem\'s requirements
     */
    let str = '';
    const romNumsObj = {
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

    const decKeys = Object.keys(romNumsObj).reverse();

    decKeys.forEach(key => {
        while (key <= n) {
            str += romNumsObj[key];
            console.log(str)
            n -= key;
            console.log(n)
        }
    });

    return str;


}

exports.data = methods;
