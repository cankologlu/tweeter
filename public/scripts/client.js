/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const createTweetElement = (tweet) => {     // Passes the object key values to jQuery object
  const $tweetElement = `<article class="article-tweet">
  <header class="article-tweet-header">
    <div class="header-user">
      <img width="50px" class="header-user-avatar" src=${tweet.user.avatars}>
    <span class="header-user-name">${tweet.user.name}</span>
    </div>
    <div class="header-user-handle">
      <span>${tweet.user.handle}</span>
    </div>
    </header>
    <div class="article-tweet-paragraph">
      <p class="tweet-paragraph">
        
      </p>
    </div>
  <footer class="twitter-footer">
    <span class="tweet-date">${timeago.format(tweet.created_at)}</span>
    <div class="tweet-symbols"> 
    <div class="flag"><i class="fa-solid fa-flag"></i></div>
    <div class="heart"><i class="fa-solid fa-heart"></i></div>
    <div class="retweet"><i class="fa-solid fa-retweet"></i></div>
    </div>
  </footer>
</article>`;
  return $tweetElement;
};


const renderTweets = (tweetsArray) => {        // Passes the objects in the returned array to createTweetElements function
  for (let tweetObj of tweetsArray) {
    let $tweet = $(createTweetElement(tweetObj));
    $tweet.find(".tweet-paragraph").text(tweetObj.content.text);
    $('#tweets-container').prepend($tweet);
  }
};

const loadTweets = function() {      // Returns tweets from url to pass render function
  $.ajax({
    url: "/tweets",
    method: "get",
  }).then(function(tweetData) {
    $(".article-tweet").remove();
    renderTweets(tweetData);
  });
};

$(document).ready(function() {


  $("#tweet-submit-form").submit(function(event) {      // Submit button event handler
    event.preventDefault();
    const data = $(this).serialize();


    if (data.length === 5 || data.length > 145) {    // Checking the input length returning error if conditions met

      $(".error-message").slideDown(200, function() {
        $(this).text("Your tweet doesn't match the required length");
      });
      return;
    } else {
      $(".error-message").css("display", "none");
    }
    $.post("/tweets", data)
      .then(() => {
        loadTweets();
      });
    $("#tweet-text").val("");
    $(".counter").val(140)
  });

  loadTweets();
});



