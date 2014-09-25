(function() {
    "use strict";

    var Foxx = require('org/arangodb/foxx');
    var console = require('console');
    var app = new Foxx.Controller(applicationContext);
    var joi = require('joi');
    var TemplateMiddleware = require("org/arangodb/foxx/template_middleware").TemplateMiddleware;
    var repo = require('repo').init(applicationContext);
    
    var templateMiddleware = new TemplateMiddleware("templates", {
        helper: function(){ /* helper functions*/ }
    });
    app.before(templateMiddleware);

    app.post('/blocks', function(req, res) {
        var block = new repo.Block(req.body());
        if (block.errors && block.errors.length){
            res.body = JSON.stringify(block.errors);
        }
        else{
            repo.blocks.save(block);
            res.body='OOKK';
        }
    }).bodyParam("block", {
        description: "Slug of the block",
        type: repo.Block,
    });

    app.get('/test', function(req, res){
        res.render('test/template/a', {test: 'test'});
    })

}());
