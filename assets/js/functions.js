$( document ).ready(function() {

  // Get started!


  $.getJSON("/assets/js/quotes.json", function(json){

    //Make a string of my data
    var text = JSON.stringify(json);

    // Make an object of the string
    var obj = JSON.parse(text);

    // Get the length of my quotes array
    var objLength = obj.quotes.length;

    var randomNum = Math.floor(Math.random() * objLength);

    // Get the data from my quotes[randomNum] object

    var id = parseInt(obj.quotes[randomNum].id) + 1;
    var quote = obj.quotes[randomNum].quote;
    var author = obj.quotes[randomNum].author;
    var image = obj.quotes[randomNum].image;

    var msg = 'id: ' + id ;
    msg += '<br/> quote: ' + quote;
    msg += '<br/> author: ' + author;
    msg += '<br/> image: ' + image;


    $('#quote').html(msg);

  });

});
