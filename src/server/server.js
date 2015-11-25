// Dependencies
var restify = require('restify');
var mongoose = require('mongoose');
var Routes = require('./routes.js')

// Core
var server, db, routes;

init();

// Privates
function init() {
  // Init mongodb connection
  mongoose.connect('mongodb://localhost');
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('MongoDB connection : ok');
  });

  // Init server
  server = restify.createServer();
  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  server.listen(8080, function() {
    console.log('Server %s started at %s : ok', server.name, server.url);
  });

  // Init routes
  routes = new Routes(server);
  routes.init();
}