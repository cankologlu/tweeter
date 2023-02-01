/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = (tweet) => {
  const tweetElement = `<article class="article-tweet">
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
      <p>
        ${tweet.content.text}
      </p>
    </div>
  <footer class="twitter-footer">
    <span class="tweet-date">10 days ago</span>
    <div class="tweet-symbols"> 
    <div class="flag"><i class="fa-solid fa-flag"></i></div>
    <div class="heart"><i class="fa-solid fa-heart"></i></div>
    <div class="retweet"><i class="fa-solid fa-retweet"></i></div>
    </div>
  </footer>
</article>`
return tweetElement;
}
$(document).ready(function () {
  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});






// $(document).ready( function () {
//   const createTweetElement = () => {
//   $.get("/tweets", (data) => {
//     console.log("data is back")
//     console.log(data)
//   });
// }
// createTweetElement()
// })


