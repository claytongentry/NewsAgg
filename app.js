// Require dependencies
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
// var parse = require('parse');

// Connect DB
var mongo_uri = process.env.MONGOLAB_URI;
var db = mongojs(mongo_uri, ['pieces']);

var app = express();

app.use(bodyParser.json());

var path = process.cwd() + '/public';

app.use(express.static(path));
app.use('/yasmin', express.static(path + '/yasmin.html'));
app.use('/sean', express.static(path + '/sean.html'));
app.use('/eric', express.static(path + '/eric.html'));
app.use('/lauren', express.static(path + '/lauren.html'));
app.use('/neel', express.static(path + '/neel.html'));
app.use('/ben', express.static(path + '/ben.html'));
app.use('/andrew', express.static(path + '/andrew.html'));
app.use('/sarah', express.static(path + '/sarah.html'));
app.use('/hma', express.static(path + '/hma.html'));
app.use('/rugg', express.static(path + '/rugg.html'));
app.use('/corban', express.static(path + '/corban.html'));
app.use('/winston', express.static(path + '/winston.html'));
app.use('/david', express.static(path + '/david.html'));
app.use('/colin', express.static(path + '/colin.html'));
app.use('/sam', express.static(path + '/sam.html'));
app.use('/gem', express.static(path + '/gem.html'));
app.use('/matthew', express.static(path + '/matthew.html'));

app.get('/yasminlist', function(req, res) {

  var query = 'relationships || drugs || cocaine || heroine || methamphetamine || crack || health || work || food';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/seanlist', function(req, res) {

  var query = 'American Ultra || Box Office || Marvel Movies || Deadpool';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/ericlist', function(req, res) {

  var query = 'Star Wars || Heroes of the Storm || No Man\'s Sky || Convention || Marvel || esports || The Walking Dead || VR Gaming || Star Trek || comics || video games || superhero || televeision || tv show || movie';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });

});

app.get('/laurenlist', function(req, res) {

  var query = '\'The Man From U.N.C.L.E.\' || fiction || books || horror || crimson peak || Game of Thrones || Guy Ritchie || King Arthur Movie';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });

});


app.get('/neellist', function(req, res) {
  var query = 'Elon Musk || NASA || SpaceX || Bill Gates || \'Space tourism\' || \'Deep Future\'';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/benlist', function(req, res) {
  var query = 'Oculus Rift || Board Games || Adventure Time || Code || Programming || Coding || Debunk';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/andrewlist', function(req, res) {
  var query = 'Archer || Code Black';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/sarahlist', function(req, res) {
  var query = 'drugs';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/hmalist', function(req, res) {
  var query = 'drugs';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/rugglist', function(req, res) {
  var query = 'Stephen King || Neil Gaiman || Narcos';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/corbanlist', function(req, res) {
  var query = 'Ballers';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/winstonlist', function(req, res) {
  var query = 'Kanye West || Radiohead || Show me a Hero || Straight Outta Compton || NWA || ';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/davidlist', function(req, res) {
  var query = 'podcast || twitter || Chvrches || Kurt Vile || Grimes || We are your friends';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/colinlist', function(req, res) {
  var query = 'drugs || weed || marijuana || stand-up || comedy || fast food || blunt talk';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/samlist', function(req, res) {
  var query = 'Dad Rock || Graphic Novels';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/gemlist', function(req, res) {
  var query = 'Fantastic Four || Amazon || Alien || Minority Report || Fan Merch || Youtube';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

app.get('/matthewlist', function(req, res) {
  var query = 'True Detective || Drake || Girls || Rick and Morty';

  db.pieces.find(
    {$text: {$search: query}}
    ).sort({pubDate : -1},
      function(err, docs) {
        if (err) {
          res.send(err);
          console.error(err);
        }
        else if (docs.length > 0) res.json(docs);
        else res.send("I got nothing.");
    });
});

var port = process.env.PORT || 3000;
app.listen(3000);
console.log("Cookin' on port " + port + '...');
