var title = $('.titleinput');
var url = $('.urlinput');

// add new article to the top of the list

var test = $('.submit').on('click', function() {
  var submit = $('.listcontainer ul').prepend('<li><article><p>'+ $('.titleinput').val()+ '</p><a href>'+ $('.urlinput').val()+ '</a><button>Read</button><button>Remove</button></article></li>');
});
