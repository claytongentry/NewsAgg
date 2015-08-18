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

var route_home = __dirname + '/public/';
console.log(route_home);

app.use(express.static(route_home + 'index.html'));
app.use('/yasmin', express.static(route_home + 'yasmin.html'));
app.use('/sean', express.static(route_home + 'sean.html'));
app.use('/eric', express.static(route_home + 'eric.html'));
app.use('/lauren', express.static(route_home + 'lauren.html'));
app.use('/neel', express.static(route_home + 'neel.html'));
app.use('/ben', express.static(route_home + 'ben.html'));
app.use('/andrew', express.static(route_home + 'andrew.html'));
app.use('/sarah', express.static(route_home + 'sarah.html'));
app.use('/hma', express.static(route_home + 'hma.html'));
app.use('/rugg', express.static(route_home + 'rugg.html'));
app.use('/corban', express.static(route_home + 'corban.html'));
app.use('/winston', express.static(route_home + 'winston.html'));
app.use('/david', express.static(route_home + 'david.html'));
app.use('/colin', express.static(route_home + 'colin.html'));
app.use('/sam', express.static(route_home + 'sam.html'));
app.use('/gem', express.static(route_home + 'gem.html'));
app.use('/matthew', express.static(route_home + 'matthew.html'));

app.get('/yasminlist', function(req, res) {

  var query = 'relationships || drugs || cocaine || heroin || methamphetamine || crack || health || work || food';

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

var port = Number(process.env.PORT || 3000);
app.listen(port);
console.log("Cookin' on port " + port + '...');
