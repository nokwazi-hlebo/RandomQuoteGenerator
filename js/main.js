var btn = $('#new-quote');
var quote = $('#quote');
var author = $('#author');
var tweetBtn = $('#twitter-share');
var qT = "";
var qA = "";
btn.on('click', function() {
    newQuote();
});
tweetBtn.on('click', function() {
    tweetBtn.attr('href', 'https://twitter.com/intent/tweet?hashtags=quoteoftheday&related=freecodecamp&text=' + encodeURIComponent('"' + qT + '" said by ' + qA)); 
});

function newQuote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp'
      },
      success: function(response) {
        qT = response.quoteText;
        qA = response.quoteAuthor;
        quote.text(qT);
        if(qA) {
            author.text('- ' + qA);
        } else {
            author.text('- unknown');
        }
          
      } });
}



