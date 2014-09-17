
var Foxx = require("org/arangodb/foxx");
var joi = require("joi");

var Block = Foxx.Model.extend({
    schema: {
        name: joi.string(),
        /*head: joi.string(),
        date: joi.date(),
        active: joi.boolean().default(true)*/
    }
});

exports.Block = Block;