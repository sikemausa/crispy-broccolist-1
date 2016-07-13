function countAll () {
  $('.totalcount').text($('article').length);
  $('.totalread').text($('li .read').length);
  $('.totalunread').text($('article').length - $('li .read').length)
};

function checkBothInputs () {
  if ($('.urlinput').val().length === 0) {
    $('.submit').attr("disabled", true)
  } else if ($('.titleinput').val().length === 0) {
    $('.submit').attr("disabled", true)
    } else {
    $('.submit').attr("disabled", false)
    }
}

countAll()

var checkInputs = $('.titleinput').on('keyup', function() {
  checkBothInputs()
});

var checkInputs = $('.urlinput').on('keyup', function() {
  checkBothInputs()
});

// var checkUrl = $('.urlinput').on('keyup', function(){
//   $('.submit').attr("disabled", false)
// });


// add new article to the top of the list

var submitArticle = $('.submit').on('click', function() {
  var title = $('.titleinput').val();
  var url = $('.urlinput').val();
  if (title === "" || url === "") {
    $('.inputcontainer').append("please be better");
  } else {
    $('.listcontainer ul').prepend("<li>" +
                                     "<article>" +
                                       "<p>" + title + "</p>" +
                                       "<a href='"+ url + "'>" + url + "</a>" +
                                       "<button class ='readToggle'>Read</button>" +
                                       "<button class ='deleteToggle'>Remove</button>" +
                                     "</article>" +
                                   "</li>");
    countAll();
  }
});

var markAsRead = $('.listcontainer ul').on('click', 'button.readToggle',function() {
  $(this).parentsUntil("ul").toggleClass('read');
  countAll();
});

var deleteArticle = $('.listcontainer ul').on('click', 'button.deleteToggle' , function() {
  $(this).parentsUntil("ul").remove();
  countAll();
});

// var countTotal = $('article').length.on('click', 'button.submitArticle', function () {
//   $('.totalcount').html("total" + (this));
// });
