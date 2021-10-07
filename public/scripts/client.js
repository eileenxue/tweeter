/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Escape function 
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (data) {
    const $newTweet = 
    `
      <article class="tweet-post">
      <header>
        <div class="user-profile">
          <img src="${data.user.avatars}">
          <div>${data.user.name}</div>
        </div>
        <div class="tweeter-name">${data.user.handle}</div>
      </header>
      <div class="tweet-text">${escape(data.content.text)}</div>
      <footer>
        <div class="date">${timeago.format(data.created_at)}</div>
        <div class="icon-group">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
      </article>
    `
    return $newTweet;
  };


  // Render Tweets
  const renderTweets = function(tweets) {
    $("#tweets-container").empty();
    // Loop through tweets and then append to container
    for (tweet of tweets){
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet); 
    }
  };
  //renderTweets(tweetData);

  // Load Tweets
  const loadTweets = function (){
    $.get('/tweets', function (data) {
      renderTweets(data);
    })
  };

  loadTweets();

  // Add Event Listener to Form's Submit Button
  $('form').submit(function (event) {
    event.preventDefault();
    // Turn form data to serialize string
    const data = $(this).serialize();
    const tweetLength = $('#tweet-text').val().length;

    if (tweetLength > 140) {
      alert("Your tweet is too long");
    } else if (tweetLength === 0) {
      alert("Please write some text");
    } else {
      // Submit a post request that sends serialized to server
      $.post('/tweets', data, function(){
        // console.log("post success");
        loadTweets();
      });
    }

  });

});