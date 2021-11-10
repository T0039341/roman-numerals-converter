import Converter from '../src/roman-numeral-converter.js';

// const converter = new Converter(342);

describe('truth', () => {
    it('is true', () => {
        expect(true).toEqual(true);
    });
});


describe('Numeral Converter', () => {
    const conv = new Converter(10);


    //test if the number from instance is returned properly
    it('instance can be created', () => {
        expect(conv.number).toBe(10);
    });

    //test with roman 
    it('should return a roman numeral when passed an integer', () => {
        let result = conv.romanConverter();
        expect(result).toBe("X");
    });


    it('should return a roman numeral when passed an integer', () => {
        let testGenerator = new Converter(30)
        let result = testGenerator.romanConverter();
        expect(result).toBe('XXX');
    })

    //check for larger than 3999
    it('Should check for out of bounds values', () => {
        let testGenerator = new Converter(4000);
        let result = testGenerator.romanConverter();
        expect(result).toBe('please enter a number between 1 and 3999')
    })

    //check for smaller than 1
    it('Should check for out of bounds values', () => {
        let testGenerator = new Converter(0);
        let result = testGenerator.romanConverter();
        expect(result).toBe('please enter a number between 1 and 3999')
    })

    //check for large composite numbers

    it('should return a roman numeral when passed an integer', () => {
        let testGenerator = new Converter(3898);
        let result = testGenerator.romanConverter();
        expect(result).toBe('MMMDCCCXCVIII');
    })


    //check wrong inputs

    it('should make sure input is a valid input', () => {
        let testGenerator = new Converter('anything');
        let result = testGenerator.romanConverter();
        expect(result).toBe('please enter a number')
    });


    //test number strings

    it('should return a roman numeral even if passed a number string', () => {
        let testGenerator = new Converter('30');
        let result = testGenerator.romanConverter();
        expect(result).toBe('XXX');
    })

})

