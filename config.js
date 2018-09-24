module.exports = {
  date: 'dddd, MMMM DD, YYYY',
  link: 'https://secure.saharareporters.com',
  name: 'Sahara Reporters',
  selectors: {
    item: '.col-medium-8 .block-module-story', //This is the main target, once targeted, you only need to target classes under it directly.
    author: 'Sahara Reporters',// Modified the feed.js to use ordinary text.
    date: 'div.block-module-content-footer-item-date',
    dateRegex: /\w+, \w+ \d+, \d+/i,
    description: 'span.block-module-content-header-title',
    thumbnail: 'span.image-background-wrapper img',
    title: 'span.block-module-content-header-title',
    url: 'span.block-module-content-header-title a',
  },
};

//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-content-footer-item-date") date
//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-story") item

//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-content-header-title") title
//document.getElementsByClassName("col-medium-8")[0].getElementsByClassName("block-module-content-header-title a") url
