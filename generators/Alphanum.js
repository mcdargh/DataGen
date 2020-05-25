var Generator = require("./Generator");
const { Random } = require('random-js');
const random = new Random();

module.exports = class Alphanum extends Generator {

    nextValue(spec) {
        var set = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var length = 50;
        var val = '';
        var setLength = set.length - 1;

        // is there len?
        if (spec.len != undefined) {
            length = spec.len;
        }
        for (var i = 0; i < length; i++) {
            var index = random.integer(0, setLength)
            val += set[index];
        }
        return val;
    }
};