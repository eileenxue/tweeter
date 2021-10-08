/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Escape function to prevent cross-site scripting
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Create tweet template
  const createTweetElement = function(data) {
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
    };
  };

  // Load Tweets
  const loadTweets = function(){
    $.get('/tweets', function(data) {
      renderTweets(data);
    });
  };

  loadTweets();

  // Error Validation
  const $formError = $('#form-error');

  const error = function(errorMessage) {
    if (errorMessage === "exceedLength"){
      $formError.html(`<i class="fas fa-exclamation-circle"></i> Your tweet is too long`);
      $formError.slideDown();
      $formError.removeClass("hide");
    } else if (errorMessage === "noText") {
      $formError.html(`<i class="fas fa-exclamation-circle"></i> Please type in some text`);
      $formError.slideDown();
      $formError.removeClass("hide");
    } else {
      $formError.slideUp();
      $formError.addClass("hide");
    };
  };

  // Add event listener to form's submit button
  $('form').submit(function(event) {
    event.preventDefault();
    // Turn form data to serialize string
    const data = $(this).serialize();
    const tweetLength = $('#tweet-text').val().length;

    if (tweetLength > 140) {
      error("exceedLength");
    } else if (tweetLength === 0) {
      error("noText");
    } else {
      // Submit a post request that sends serialized to server
      $.post('/tweets', data, function(){
        loadTweets();
        $formError.slideUp();
        $formError.addClass("hide");
        $('form').find("textarea").val("");
        $('form').find(".counter").val("140");
      });
    };
  });

  // Form Toggle
  $('.new-tweet').hide();

  // When tweet button is clicked, show/hide the tweet form
  $('.new-tweet-btn').click(function() {
    $('.new-tweet').slideToggle();
    $('#tweet-text').focus();
  })

});