var CSV = require("./CSV")

function getFormatter(format) {
    switch (format) {
        case "csv":
            return CSV;
    }
}

module.exports.getFormatter = getFormatter;