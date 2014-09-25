
var Foxx = require("org/arangodb/foxx");
var console = require('console');
var applicationContext;
var joi = require("joi");

exports.init = function init(appContext){
	applicationContext = appContext;
	return exports;
}

var Block = exports.Block = Foxx.Model.extend({
    schema: {
        name: joi.string().required(),
        /*head: joi.string(),
        date: joi.date(),
        active: joi.boolean().default(true)*/
    }
});

var blocks = exports.blocks = new Foxx.Repository(applicationContext.collection("blocks"), {
	model: Block
});
