var Generator = require("./Generator");
const { Random } = require('random-js');
const random = new Random();

module.exports = class Hex extends Generator {

    nextValue(spec) {
        var set = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var length = 50;
        var val = '0x';
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