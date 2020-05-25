var Generator = require("./Generator");
var random = require('random-js');

module.exports = class GuidGenerator extends Generator {
    nextValue(spec) {
        return random.uuid4(random.nodeCrypto)
    }
};