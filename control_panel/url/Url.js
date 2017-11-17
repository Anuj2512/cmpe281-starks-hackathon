var mongoose = require('mongoose');  

var UrlSchema = new mongoose.Schema({  
  slug: String,
  destination: String
});

mongoose.model('Url', UrlSchema);
module.exports = mongoose.model('Url');