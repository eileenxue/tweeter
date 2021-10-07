$(document).ready(function() {
  
  $('#tweet-text').on('keyup', function() {
    let counter = 140 - $(this).val().length;
    $(this).closest('form').children('.action-group').children('.counter').text(counter);

    // Add/remove invalid class to change text red
    if (counter < 0) {
      $('.counter').addClass('invalid');
    } else {
      $('.counter').removeClass('invalid');
    };
  });
});