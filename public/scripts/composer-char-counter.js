$(document).ready(function(){
  
  $('#tweet-text').on('keyup', function() {
    // console.log(140 - $(this).val().length);
    let counter = 140 - $(this).val().length;
    $(this).closest('form').children('.action-group').children('.counter').text(counter);

    // Add/remove invalid class to change text red
    if (counter < 0) {
      $('.counter').addClass('invalid');
    } else {
      $('.counter').removeClass('invalid');
    }
  });

});


// var element = document.getElementById('tweet-text');
// function callback() {
//     console.log('Press');
// }
// element.addEventListener('keypress', callback);


// const element = document.getElementById('tweet-text');
//   element.addEventListener('keypress', callback); 
//   function callback() {
//     console.log(this);
//   }