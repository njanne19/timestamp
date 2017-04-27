var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');



var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues/:dateVal', function (req, res, next) {

  var dateVal = req.params.dateVal;
//Natural Date Options
  var dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };


	
  if (isNaN(dateVal)) {
    var naturalDate = new Date(dateVal);
    naturalDate = naturalDate.toLocaleDateString('en-us', dateFormatOptions);

    var unixDate = new Date (dateVal).getTime()/1000;
  } else {
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal * 1000);
    naturalDate = naturalDate.toLocaleDateString('en-us', dateFormatOptions);
  }
  res.json({unix: unixDate, natural: naturalDate});

});


