var Generator = require("./Generator");
const { Random } = require('random-js');
const random = new Random();

module.exports = class IP_address extends Generator {
    nextValue(spec) {
        return String(random.integer(1, 223)) + '.' + String(random.integer(0, 254)) + '.' + String(random.integer(0, 254)) + '.' + String(random.integer(1, 254))
    }
};