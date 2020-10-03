module.exports = function toReadable(number) {
    function oneDigit(number, isNone) {
        switch (number) {
            case 0: return isNone ? 'zero' : '';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
        }
    }

    function twoDigit(number) {
        if (number < 10) return oneDigit(number, false);

        if (number < 20) {
            switch (number) {
                case 10: return 'ten';
                case 11: return 'eleven';
                case 12: return 'twelve';
                case 13: return 'thirteen';
                case 14: return 'fourteen';
                case 15: return 'fifteen';
                case 16: return 'sixteen';
                case 17: return 'seventeen';
                case 18: return 'eighteen';
                case 19: return 'nineteen';
            }
        }

        let result = '';

        switch (parseInt(number / 10)) {
            case 2: result += 'twenty'; break;
            case 3: result += 'thirty'; break;
            case 4: result += 'forty'; break;
            case 5: result += 'fifty'; break;
            case 6: result += 'sixty'; break;
            case 7: result += 'seventy'; break;
            case 8: result += 'eighty'; break;
            case 9: result += 'ninety'; break;
        }

        const secondNumber = number % 10;
        if (secondNumber) {
            result += ` ${oneDigit(secondNumber, false)}`;
        }

        return result.trim();
    }

    const arr = [...number.toString()];
    const { length } = arr;

    if (length == 1) {
        return oneDigit(number, true);
    }

    if (length == 2) {
        return twoDigit(number);
    }

    if (length == 3) {
        return `${oneDigit(+arr[0], false)} hundred ${twoDigit(+arr.slice(1).join(''))}`.trim();
    }
};
