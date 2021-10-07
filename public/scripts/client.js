/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function (data) {
    const newTweet = 
    `
      <article class="tweet-post">
      <header>
        <div class="user-profile">
          <img src="${data.user.avatars}">
          <div>${data.user.name}</div>
        </div>
        <div class="tweeter-name">${data.user.handle}</div>
      </header>
      <div class="tweet-text">${data.content.text}</div>
      <footer>
        <div class="date">${data.created_at}</div>
        <div class="icon-group">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
      </article>
    `
    return newTweet;
  };

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

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log('This is the new tweet');
  console.log($tweet); // to see what it looks like
$('#tweets-container').prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});