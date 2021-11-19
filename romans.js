const ROMANS_TO_NUMBER = {
    I: 1,
    IV: 4,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const UNITY_TO_ROMANS = {
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
const TENS_TO_ROMANS = {
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
const HUNDRED_TO_ROMANS = {
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
const THOUSANDS_TO_ROMANS = {
    1: 'M',
    2: 'MM',
    3: 'MMM',
}

const UNITY_NUMBER_MAPPER = (number) => UNITY_TO_ROMANS[number]
const TENS_NUMBER_MAPPER = (number) => TENS_TO_ROMANS[number]
const HUNDRED_NUMBER_MAPPER = (number) => HUNDRED_TO_ROMANS[number]
const THOUSANDS_NUMBER_MAPPER = (number) => THOUSANDS_TO_ROMANS[number]

const toRoman = (number) => {
    if (number > 0 && number < 4000){
        let splitnumber = number.toString().split('')
        let roman = []
        let romanNumber = ''
        if (splitnumber.length === 1){
            roman.push(UNITY_NUMBER_MAPPER(splitnumber[0]))
            romanNumber = roman.join('')
            console.log(romanNumber);
        }
        else if (splitnumber.length === 2){
            roman.push(TENS_NUMBER_MAPPER(splitnumber[0]))
            roman.push(UNITY_NUMBER_MAPPER(splitnumber[1]))
            romanNumber = roman.join('')
            console.log(romanNumber);

        }
        else if (splitnumber.length === 3){
            roman.push(HUNDRED_NUMBER_MAPPER(splitnumber[0]))
            roman.push(TENS_NUMBER_MAPPER(splitnumber[1]))
            roman.push(THOUSANDS_NUMBER_MAPPER(splitnumber[2]))
            romanNumber = roman.join('')
            console.log(romanNumber);

        }
        else if (splitnumber.length === 4){
            roman.push(THOUSANDS_NUMBER_MAPPER(splitnumber[0]))
            roman.push(HUNDRED_NUMBER_MAPPER(splitnumber[1]))
            roman.push(TENS_NUMBER_MAPPER(splitnumber[2]))
            roman.push(UNITY_NUMBER_MAPPER(splitnumber[3]))
            romanNumber = roman.join('')
            console.log(romanNumber);

        }
    }
    else {
        console.log('Put a number between 1 and 3999');
    }
}

toRoman(4);




const toNumber = (value, numberToRomans) => Object.entries(numberToRomans).map((roman)=>{
    value === roman[1] && console.log(roman[0]);
})

const exceptions = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
const MAPPER = {
    'M': THOUSANDS_TO_ROMANS,
    'C': HUNDRED_TO_ROMANS,
    'X': TENS_TO_ROMANS,
    'I': UNITY_TO_ROMANS
}

const MAPPER2 = (roman) => MAPPER[roman]

numberToRoman = (string) => {
    let splitRoman = string.split('')
    // console.log(splitRoman);
    let groupRoman = []
    for (let i = 0; i< splitRoman.length; i++){
        if (splitRoman[i] !== splitRoman[i-1]){
            if (i === 0){
                groupRoman.push(splitRoman[i])
            }
            else if (exceptions.includes(splitRoman[i-1]+ splitRoman[i])){
                groupRoman.push(splitRoman[i-1]+ splitRoman[i])
            }
            else {
                groupRoman.push(splitRoman[i])
            }
        }
        else {
            groupRoman.push(splitRoman[i])
        }
    }
    console.log(groupRoman);
    groupRoman.map(options=>{
        toNumber(options, MAPPER2(options))
    })
}
// numberToRoman('MMCCCXLIII')

