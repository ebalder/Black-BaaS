'use strict';

var debug = require('debug')('frontend:server'); // jshint ignore:line

var bodyParser = require('body-parser');
var express = require('express');
var serveStatic = require('serve-static');
var ODM = require('promised-jugglingdb');
var arango = require('jugglingdb-arango');

//var api = require('/api');

var app = express();
var env = process.env;

if (env.NODE_ENV !== 'production') {
    console.warn('NODE_ENV: %s', env.NODE_ENV);
}
else {
    console.log('starting in production mode');
}

app.use(serveStatic(__dirname + '/public'));
app.use(bodyParser.json());

var options = {
    host: 'localhost',
    port: '8529',
    username: 'BBaaS',
    password: 'BBaaS',
    database: 'BB_test'
};
var schema = new ODM.Schema('arango', options);
var Test = schema.define('test', {'test': String});
var test = new Test({test: 'lalo'});
test.save();

app.listen(3000);

