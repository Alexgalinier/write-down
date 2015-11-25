var restify = require('restify');
var mongoose = require('mongoose');

// Mongo connection
mongoose.connect('mongodb://localhost');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connection ok');
});

var articleSchema = mongoose.Schema({
  id: String,
  name: String
});

var Article = mongoose.model('Article', articleSchema);

var anArticle = new Article({id: '1', name: 'AngularJs'});
anArticle.save();

Article.find({}).then(function(res) {
  console.log(res);
  return Article.remove({id: '1'});
}).then(function() {
  Article.find(function(err, res) {
    if (err)
      return;

    console.log(res);
  });
});

// Server core
var server = restify.createServer();
server.get('/rest/articles', function(req, res, next) {
  res.send([
    {
      id: 1,
      name: 'Angular Best practices'
    }
  ]);
  next();
});

/*server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});*/