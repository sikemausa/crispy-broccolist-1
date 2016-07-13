
function countAll () {
  $('.totalcount').text("Total Count: " + $('article').length);
  $('.totalread').text("Read Count: " + $('li.read').length);
  $('.totalunread').text("Unread Count: " + ($('article').length - $('li.read').length));
  toggleClear();
};

function toggleClear () {
  if ($('li.read').length === 0) {$('.clearreadbookmarks').attr("disabled", true);
  } else {$('.clearreadbookmarks').attr("disabled", false);
  }
}

function checkBothInputs() {
  if ($('.urlinput').val().length === 0) { return $('.submit').attr("disabled", true) }
  if ($('.titleinput').val().length === 0) { return $('.submit').attr("disabled", true) }
  return $('.submit').attr("disabled", false);
}

function isUrl(s) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s);
}

countAll()

// keyup functions to check inputs


$('.titleinput').on('keyup', function() {
  checkBothInputs()
});

$('.urlinput').on('keyup', function() {
  checkBothInputs()
});

// add new article to the top of the list

var submitArticle = $('.submit').on('click', function() {
  var title = $('.titleinput').val();
  var url = $('.urlinput').val();
  if (!(isUrl($('.urlinput').val()))) {
    $('.error-message').text("Not a valid URL");
  } else {
    $('.listcontainer ul').prepend("<li>" +
                                     "<article>" +
                                       "<p>" + title + "</p>" +
                                       "<a href='"+ url + "'>Visit</a>" +
                                       "<button class ='readToggle'>Read</button>" +
                                       "<button class ='deleteToggle'>Remove</button>" +
                                     "</article>" +
                                   "</li>");
    countAll();
      $('.error-message').text("");
  }
});

//click buttons to clear or class articles

var markAsRead = $('.listcontainer ul').on('click', 'button.readToggle',function() {
  $(this).parents("li").toggleClass('read');
  countAll();
});

var deleteArticle = $('.listcontainer ul').on('click', 'button.deleteToggle' , function() {
  $(this).parents("li").remove();
  countAll();
});

var clearRead = $('.inputcontainer').on('click', 'button.clearreadbookmarks',function() {
  $('ul').children().removeClass('read');
  countAll()
});
