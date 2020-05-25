var fs = require('fs');
var path = require('path');
var Formatter = require("./Formatter");

module.exports = class CSV extends Formatter {
    format(spec, data) {
        var i;
        var workingData;
        var res = {};

        // go through each table object (from the schema) and output rows/columns (from the data)
        for (i = 0; i < spec.gen.tables.length; i++) {
            var table = spec.gen.tables[i];
            res[table.name] = this.formatTable(table, data[table.name]);
        }
        return res;
    }

    // convert the table (columns and rows) into a csv string
    formatTable(table, data) {
        var res = {};
        var outputString = "";

        // build header
        for (var i = 0; i < table.columns.length; i++) {
            var hdr;
            if (i != 0) {
                outputString += "," + table.columns[i].name;
            } else {
                outputString += table.columns[i].name;
            }
        }
        // add in rows
        for (var row = 0; row < table.num; row++) {
            outputString += '\n';
            for (var col = 0; col < table.columns.length; col++) {
                var column = table.columns[col].name;
                if (col != 0) {
                    outputString += "," + data[column][row];
                } else {
                    outputString += data[column][row];
                }
            }
        }
        return outputString;
    }

    saveOutput(schema, filePath, output) {
        for (var i = 0; i < schema.gen.tables.length; i++) {
            var tableName = schema.gen.tables[i].name;
            var tableOutput = output[tableName];
            if (tableOutput != undefined) {
                var fileName = path.join(filePath, tableName + ".json");
                fs.writeFileSync(fileName, tableOutput);
            }
        }
    }
};