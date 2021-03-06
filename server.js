var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var CONTACTS_FILE = path.join(__dirname, 'contacts.json');

app.set('port', (process.env.PORT || 4000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/contacts', function(req, res) {
  fs.readFile(CONTACTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.description = "Internal Error";
      res.send(err);
    }
    else {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    }
  });
});

app.get('/api/contact/:id', function(req, res) {
  var id = req.params.id;
  fs.readFile(CONTACTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.description = "Internal Error";
      res.send(err);
    }
    else {
      res.setHeader('Cache-Control', 'no-cache');
      var contacts = JSON.parse(data);
      const selectedContact = contacts.map(contact => {
         if (contact.id == id) {
          res.setHeader('Cache-Control', 'no-cache');
          return res.json(contact);
         }
      });
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
