var Generator = require("./Generator");
const { Random } = require('random-js');
const random = new Random();

module.exports = class DateTime extends Generator {
    constructor() {
        super();
        var dt = new Date();
        this.min = new Date(dt.getFullYear(), 0);
        this.max = dt;  // default max set to now
    }

    nextValue(spec) {
        var val = 0;

        // is there min date?
        var min = spec.min != undefined ? spec.min : this.min;
        // is there a max?
        var max = spec.max != undefined ? spec.max : this.max;

        // get value
        val = random.integer(Number(min), Number(max));

        return new Date(val);
    }
};