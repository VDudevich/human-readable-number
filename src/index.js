module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    const arrayBefore20 = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const arrayAfter20 = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    const arrayOfRank = ['', '', 'hundred '];

    if (number < 20) return arrayBefore20[number].trim();

    let resultStr = '';
    let arrFromNumber = number.toString().split('');
    let numberOfDigits = arrFromNumber.length;
    let lastTwoDigits = Number(arrFromNumber[numberOfDigits - 2] + arrFromNumber[numberOfDigits - 1]);
    let processedDigits = numberOfDigits;
    for (let i = 0; i < numberOfDigits; i++) {
        if (i + 2 >= numberOfDigits && lastTwoDigits < 20) {
            if (i === numberOfDigits - 1 && arrFromNumber[numberOfDigits - 1] === '0') {
                break;
            }
            if (lastTwoDigits < 20) {
                resultStr += arrayBefore20[lastTwoDigits];
                break;
            } else {
                resultStr += arrayBefore20[arrFromNumber[i]];
            }
            continue;
        }
        if (i === numberOfDigits - 1) {
            resultStr += arrayBefore20[arrFromNumber[i]];
            break;
        }
        if (i === 0 && numberOfDigits === 3) {
            resultStr += arrayBefore20[arrFromNumber[i]];
        } else {
            resultStr += arrayAfter20[arrFromNumber[i]]
        }
        resultStr += arrayOfRank[numberOfDigits - i - 1];
    }
    return resultStr.trim();
}
