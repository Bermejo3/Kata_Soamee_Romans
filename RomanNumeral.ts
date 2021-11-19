import { Hundred, Tens, Thousands, Unity } from "./test"


class RomanNumeral {

    constructor(){}

    public UNITY_TO_ROMANS: Unity = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
    }
    public TENS_TO_ROMANS: Tens = {
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC',
    }
    public HUNDRED_TO_ROMANS: Hundred = {
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM',
    }
    public THOUSANDS_TO_ROMANS: Thousands = {
        1: 'M',
        2: 'MMM',
        3: 'MMMM',
    }
    
    UNITY_NUMBER_MAPPER = (number: string) => this.UNITY_TO_ROMANS[number]
    TENS_NUMBER_MAPPER = (number: string) => this.TENS_TO_ROMANS[number]
    HUNDRED_NUMBER_MAPPER = (number: string) => this.HUNDRED_TO_ROMANS[number]
    THOUSANDS_NUMBER_MAPPER = (number: string) => this.THOUSANDS_TO_ROMANS[number]

    toRoman(number: number){
        if (number > 0 && number < 4000){
            let splitnumber = number.toString().split('')
            let roman = []
            let romanNumber = ''
            if (splitnumber.length === 1){
                roman.push(this.UNITY_NUMBER_MAPPER(splitnumber[0]))
                romanNumber = roman.join('')
                console.log(romanNumber);
            }
            else if (splitnumber.length === 2){
                roman.push(this.TENS_NUMBER_MAPPER(splitnumber[0]))
                roman.push(this.UNITY_NUMBER_MAPPER(splitnumber[1]))
                romanNumber = roman.join('')
                console.log(romanNumber);
            }
            else if (splitnumber.length === 3){
                roman.push(this.HUNDRED_NUMBER_MAPPER(splitnumber[0]))
                roman.push(this.TENS_NUMBER_MAPPER(splitnumber[1]))
                roman.push(this.THOUSANDS_NUMBER_MAPPER(splitnumber[2]))
                romanNumber = roman.join('')
                console.log(romanNumber);
            }
            else if (splitnumber.length === 4){
                roman.push(this.THOUSANDS_NUMBER_MAPPER(splitnumber[0]))
                roman.push(this.HUNDRED_NUMBER_MAPPER(splitnumber[1]))
                roman.push(this.TENS_NUMBER_MAPPER(splitnumber[2]))
                roman.push(this.UNITY_NUMBER_MAPPER(splitnumber[3]))
                romanNumber = roman.join('')
                console.log(romanNumber);
            }
        }
        else {
            console.log('Put a number between 1 and 3999');
        }
    }
} 

let RomanNumber = new RomanNumeral
RomanNumber.toRoman(1234)