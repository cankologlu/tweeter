const { redirect } = require("express/lib/response");

$(document).ready(function() {
  $( ".new-tweet form textarea" ).keyup(function() {
    $(".new-tweet form textarea").css("color",":#1F1F1F")
  });  
});

