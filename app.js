// Modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// set app Configuration
app.set('port', process.env.PORT || 3000);

// set app use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/items', require('./api/items'));
app.use('/item', require('./api/item'));

// db connection
app.listen(app.get('port'), () => {
  console.log('Example app listening on port ' + app.get('port'));
});

module.exports = app;
