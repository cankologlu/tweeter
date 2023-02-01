// const { redirect } = require("express/lib/response");

$(document).ready(function() {
  const counter = $(".counter")
  $( ".new-tweet form textarea" ).on("input",function() {
    const limit = 140;
    const currentLength = this.value.length
    counter.text(limit - currentLength);
    if (currentLength > 140 ) {
        counter.addClass("max-char-limit"); 
    } else {
      counter.removeClass("max-char-limit")
    }
  });
});


