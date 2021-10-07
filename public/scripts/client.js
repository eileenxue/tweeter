/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

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
      <div class="tweet-text">${data.content.text}</div>
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

  // Add Event Listener to Form's Submit Button
  $('form').submit(function (event) {
    // alert( "Handler for .submit() called." );
    event.preventDefault();
    // Turn form data to serialize string
    const data = $(this).serialize();
    // Submit a post request that sends serialized to server
    $.post('/tweets', data, function(){
      console.log("post success");
    });

  });

  // Load Tweets
  const loadTweets = function (){
    $.get('/tweets', function (data) {
      renderTweets(data);
    })
  };

  loadTweets();

});