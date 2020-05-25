var Guid = require("./Guid");
var Int64 = require("./Int64");
var AlphaNum = require('./Alphanum');
var Hex = require('./Hex');
var IP_address = require('./IP_address');
var Datetime = require('./DateTime');

function getGenerator(gen) {
    switch (gen) {
        case "guid":
            return Guid;
        case "int64":
            return Int64;
        case "alphanum":
            return AlphaNum;
        case "hex":
            return Hex;
        case "ip_address":
            return IP_address;
        case "datetime":
            return Datetime;
        default:
            throw "No generator found for: " + gen
    }
}

module.exports.getGenerator = getGenerator;