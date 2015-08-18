var Feedparser = require('feedparser');
var request = require('request');
var moment = require('moment');
var db = require('./db.js').db;

// Remove articles more than 3 days old
db.pieces.createIndex({"pubDate": 1}, {expireAfterSeconds:259200});

// Make searchable fields
db.pieces.createIndex({"title": "text"});
db.pieces.createIndex({"summary":"text"});
db.pieces.createIndex({"description":"text"});

var requests = [
  'http://rss.nytimes.com/services/xml/rss/nyt/Science.xml',
  'http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml',
  'http://rss.nytimes.com/services/xml/rss/nyt/Space.xml',
  'http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
  'http://rss.nytimes.com/services/xml/rss/nyt/Health.xml',
  'http://rss.nytimes.com/services/xml/rss/nyt/Research.xml',
  'http://feeds.feedburner.com/nybooks',
  'https://www.reddit.com/r/internetisbeautiful/.rss',
  'https://www.reddit.com/r/science/.rss',
  'https://www.reddit.com/r/tech/.rss',
  'https://www.reddit.com/r/kanye/.rss',
  'https://www.reddit.com/r/psychology/.rss',
  'https://www.reddit.com/r/askscience/.rss',
  'https://www.reddit.com/r/weird_science/.rss',
  'https://www.reddit.com/r/technology/.rss',
  'http://feeds.sciencedaily.com/sciencedaily/top_news?format=xml',
  'http://feeds.arstechnica.com/arstechnica/technology-lab?format=xml',
  'http://feeds.arstechnica.com/arstechnica/gadgets?format=xml',
  'http://feeds.arstechnica.com/arstechnica/gaming?format=xml',
  'http://feeds.arstechnica.com/arstechnica/science?format=xml',
  'http://feeds.arstechnica.com/arstechnica/multiverse?format=xml',
  'http://phys.org/rss-feed/technology-news/hi-tech/',
  'http://phys.org/rss-feed/technology-news/internet/',
  'http://phys.org/rss-feed/nanotech-news/bio-medicine/',
  'http://phys.org/rss-feed/space-news/space-exploration/',
  'http://phys.org/rss-feed/biology-news/biotechnology/',
  'http://phys.org/rss-feed/technology-news/software/',
  'http://phys.org/rss-feed/earth-news/environment/',
  'http://www.newyorker.com/feed/tech',
  'http://feeds.wired.com/wired/index',
  'http://www.wired.com/category/science/feed/',
  'http://www.wired.com/category/gear/feed/',
  'http://www.wired.com/category/underwire/feed/',
  'http://press.nationalgeographic.com/feed/',
  'http://feeds.washingtonpost.com/rss/rss_comic-riffs',
  'http://hnrss.org/newest',
  'http://news.google.com/?output=rss',
  'http://www.nasa.gov/rss/dyn/solar_system.rss',
  'http://www.nasa.gov/rss/dyn/breaking_news.rss'
];

// Read read read
requests.forEach(function(current) {
  read_rss(current);
});


/**
* Implements RSS reader using Feedparser module
* Adds article to mongoDB if it's not already there
*/
function read_rss(source) {

  var feedparser = new Feedparser();
  var req = request(source);

  req.on('error', function(error) {
    console.log("ERROR: " + error);
  });

  req.on('response', function(res) {
    var stream = this;
    if (res.statusCode !== 200) return this.emit('error', new Error('Bad status code'));
    stream.pipe(feedparser);
  });

  feedparser.on('error', function(error) {
    console.log("COULD NOT PARSE. HERE'S WHY: " + error);
  });

  feedparser.on('readable', function() {
    var stream = this,
        meta = this.meta,
        entry = {},
        item;
    while (item = stream.read()) {
        // Only add to db if it's not already there
        db.pieces.update(
        {title:item.title},
        {$set:{
          "title":item.title,
          "author":item.author,
          "source":item.meta.title,
          "description":item.description.replace(/<(?:.|\n)*?>/gm, ''),
          "summary":item.summary.replace(/<(?:.|\n)*?>/gm, ''),
          "image":item.image.url,
          "pubDate":new Date(item.date),
          "link":item.link
        }},
        {upsert:true}
      );

    }

  });

}
