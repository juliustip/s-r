module.exports = {
  date: 'dddd, MMMM DD, YYYY',
  link: 'http://saharareporters.com',
  name: 'Sahara Reporters',
  selectors: {
    author: '.author',
    date: '.col-medium-8 .block-module-content-footer-item-date',
    dateRegex: /\w+, \w+ \d+, \d+/i,
    description: '.col-medium-8 span.block-module-content-header-title',
    item: '.col-medium-8 .block-module-story',
    title: '.col-medium-8 span.block-module-content-header-title',
    url: '.col-medium-8 span.block-module-content-header-title a',
  },
};

//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-content-footer-item-date") date
//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-story") item

//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-content-header-title") title
//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-content-header-title a") url
