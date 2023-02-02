/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }

const createTweetElement = (tweet) => {
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
</article>`
  return $tweetElement;
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

/* Event Listener*/



const renderTweets = (tweetsArray) => {
  for (let tweetObj of tweetsArray) {
    let $tweet = $(createTweetElement(tweetObj));
    $tweet.find(".tweet-paragraph").text(tweetObj.content.text);
    $('#tweets-container').prepend($tweet);
  }
}

const loadTweets = function () {
  $.ajax({
    url: "/tweets",
    method: "get",
  }).then(function (tweetData) {
    $(".article-tweet").remove();
    renderTweets(tweetData);
  })
}

$(document).ready(function () {

  // renderTweets(data)

  $("#tweet-submit-form").submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize() 
    // let $error = $(".new-tweet h2")
    // $error.hide()

    if (data.length === 5 || data.length > 145) {    // Checking the input length
      
      $(".error-message").slideToggle( "slow", function() {
        $(this).text( "Your tweet doesn't match the required length" );
      }); 

      return;
      
    } else {
      $(".error-message").hide()
    }

    $.post("/tweets", data)
      .then(() => {
        loadTweets();
      })
      $("#tweet-text").val("");
  })
  loadTweets()
});




 // const $tweet = createTweetElement(tweetData);

// $(document).ready( function () {
//   const createTweetElement = () => {
//   $.get("/tweets", (data) => {
//     console.log("data is back")
//     console.log(data)
//   });
// }
// createTweetElement()
// })


