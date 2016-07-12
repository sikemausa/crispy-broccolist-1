var title = $('.titleinput');
var url = $('.urlinput');

// add new article to the top of the list

var submitArticle = $('.submit').on('click', function() {
  $('.listcontainer ul').prepend('<li><article><p>'+ $('.titleinput').val()+ '</p><a href>'+ $('.urlinput').val()+ '</a><button class = "readToggle">Read</button><button class = "deleteToggle">Remove</button></article></li>');
});

var markAsRead = $('.readToggle').on('click', function() {
  $(this).parentsUntil("ul").toggleClass('read');
});


var deleteArticle = $('.deleteToggle').on('click', function() {
  $(this).parentsUntil("ul").remove();
});
