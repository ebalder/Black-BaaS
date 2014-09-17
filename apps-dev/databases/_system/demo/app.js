(function() {
    "use strict";

    var Foxx = require('org/arangodb/foxx');
    var console = require('console');
    var app = new Foxx.Controller(applicationContext);
    var joi = require('joi');
    var TemplateMiddleware = require("org/arangodb/foxx/template_middleware").TemplateMiddleware;
    var Model = require('model');
    
    var templateMiddleware = new TemplateMiddleware("templates", {
        helper: function(){ /* helper functions*/ }
    });
    app.before(templateMiddleware);

    app.post('/blocks', function(req, res) {
        var block = new Model.Block(req.body);
        if (block.errors){
            console.log('AAAAAA');
        }
        else{
            block.save();
        }
    }); 

    app.get('/test', function(req, res){
        console.log(this);
        res.render('test/template/a', {test: 'test'});
    })

}());
