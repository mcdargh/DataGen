"use strict";
var fs = require('fs');
var genFactory = require('./generators/generatorFactory');
var fmtFactory = require('./formatters/formatterFactory');

function loadFileSchema(file) {
    var schema;

    var contents = fs.readFileSync(file, 'utf8');
    // try to convert to json
    try {
        schema = JSON.parse(contents);
    }
    catch {
        console.log("the schema " + file + " is not valid json");
    }
    return schema;
}

function processColumn(num, column) {
    var generator;
    var value, i;
    var values = [];

    console.log("\t\tProcessing column: " + column.name);
    generator = genFactory.getGenerator(column.spec);
    if (generator != null) {
        var genInstance = new generator();
        if (genInstance != null) {
            for (i = 0; i < num; i++) {
                values.push(genInstance.nextValue(column));
            }
        }
    }
    return values;
}

function processTable(table) {
    var columnValues = {};

    console.log("\tProcessing table: " + table.name);

    var len = table.columns.length;
    for (var item = 0; item < len; item++) {
        var columnName = table.columns[item].name;
        columnValues[columnName] = processColumn(table.num, table.columns[item]);
    }
    return columnValues;
}

function runSchema(schema) {
    var tableValues = {};
    var res = {};
    var len = schema.gen.tables.length;
    console.log("Running schema " + schema.name);

    for (var item = 0; item < len; item++) {
        var tableName = schema.gen.tables[item].name;
        tableValues[tableName] = processTable(schema.gen.tables[item]);
    }
    return tableValues;
}

function main() {
    var values = [];
    var output = [];

    // load datagen schema
    var schema = loadFileSchema('./test/test.json');
    // run it
    if (schema != null) {
        values = runSchema(schema);
    }

    // // load formatter
    // var formatter = fmtFactory.getFormatter("csv");
    // if (formatter != null) {
    //     var fmtInstance = new formatter();
    //     if (fmtInstance != null) {
    //         output = fmtInstance.format(schema, values);
    //         // save csv files
    //         fmtInstance.saveOutput(schema, "./test/", output);
    //     }
    // }

    // save json data
    var json = JSON.stringify(values, null, '\t');
    fs.writeFileSync('./test/output.json', json);
}

main();