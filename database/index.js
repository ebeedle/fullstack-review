var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  id: String,
  name: String,
  login: String
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;