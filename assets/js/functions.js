$( document ).ready(function() {
  randomQuote();
  // Get started!
  function randomQuote(){
    $.getJSON("/assets/js/quotes.json", function(json){

    //Make a string of my data
    var text = JSON.stringify(json);

    // Make an object of the string
    var obj = JSON.parse(text);

    // Get the length of my quotes array
    var objLength = obj.quotes.length;

    var randomNum = Math.floor(Math.random() * objLength); ;

    // Get the data from my quotes[randomNum] object
    var id = parseInt(obj.quotes[randomNum].id) + 1;
    var quote = obj.quotes[randomNum].quote;
    var author = obj.quotes[randomNum].author;
    var date = obj.quotes[randomNum].date;
    var activity = obj.quotes[randomNum].activity;
    var image = obj.quotes[randomNum].image;

    var share_url = 'http://codepen.io/fabien_d/pen/jrKGZv';


    // Insert the data into the html
    $('#id').text(id);
    $('#name').text(author + ' ');
    $('#quotetxt').text('"' + quote + '"');
    $('#date').text('(' + date + ')');
    $('#activity').text(activity);
    $('.image').css('background-image', 'url(' + image + ')');

    // Update the text link in the Tweeter button


    //$('#tweet').html('<a id="tweet" href="https://twitter.com/intent/tweet?text=' + quote + '" data-show-count="false" data-size="large" class="twitter-share-button">Tweet</a>');
    $('#twitter-share-section').html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + share_url +'" data-size="large" data-text="' + quote + '" data-count="none" data-hashtags="Quotes">Tweet</a>');
    //$('a#tweet').prop("href", "https://twitter.com/intent/tweet?text=" + quote);
    twttr.widgets.load();
    });
  }


  $('#random').on('click', function() {
    randomQuote();
  });



});
