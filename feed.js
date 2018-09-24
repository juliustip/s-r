var Cheerio = require('cheerio');
var CONFIG = require('./config');
var Moment = require('moment');
var Request = require('superagent');
var RSS = require('rss');
var URL = require('url');

module.exports = function (request, response) {
  Request
    .get(CONFIG.link)
    .end(function(reqError, reqResult) {
      var $ = Cheerio.load(reqResult.text);
      var feed = new RSS({
        title: CONFIG.name,
        site_url: CONFIG.link
      });

      $(CONFIG.selectors.item).each(function () {
        var date = $(CONFIG.selectors.date, this).text().trim();
        if (CONFIG.selectors.dateRegex !== undefined &&
            CONFIG.selectors.dateRegex !== null) {
          var newdate = date.match(CONFIG.selectors.dateRegex);

          if (typeof date !== 'string') {
            newdate = newdate[0];
          }

          if (newdate === null) {
            newdate = date;
          }

          date = newdate;
        }

        var url = $(CONFIG.selectors.url, this).attr('href').trim();
        if (url.substring(0,1) === '/') {
        	url = URL.resolve(CONFIG.link, url);
        }

        feed.item({
          author: CONFIG.selectors.author,
       /*   date: Moment(
            date,
            CONFIG.date
          ), */
          enclosure : {
            url: $(CONFIG.selectors.thumbnail, this).attr('src').trim(),
            type: 'image/jpeg'
          }, 
          custom_elements: [
          /* {'image': {
            _attr: {
              link: url,
              title: '',
              url: $(CONFIG.selectors.thumbnail, this).attr('src').trim(),
              width: '300',
              height: '168'
            }
            }}, */
             {'pubDate': $(CONFIG.selectors.date, this).text().trim() 
            }
            ],
          description: $(CONFIG.selectors.description, this).text().trim(),
          title: $(CONFIG.selectors.title, this).text().trim(),
          url: url,
        });
      });

      response.type('text/xml').send(feed.xml('  '));
    });
};
