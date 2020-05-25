var Generator = require("./Generator");
const { Random } = require('random-js');
const random = new Random();

module.exports = class Int64 extends Generator {
    nextValue(spec) {
        var max, min;

        min = 0;
        max = 0x20000000000000;

        // is there max/min?
        if (spec.max != undefined) {
            max = spec.max;
        }
        if (spec.min != undefined) {
            min = spec.min;
        }

        return random.integer(min, max);
    }
};