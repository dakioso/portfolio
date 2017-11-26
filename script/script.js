$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1600);
});

$('#send-message').click(function(e){

  e.preventDefault();
  if($('#email').val()){
    $('#email').val('');
    $('#message').val('');
    $('#status').addClass('status-green').show();
  } else {
    $('#status').addClass('status-red').show();
    $('#status').text('Missing email!');
    $('#email').addClass('error');
  }

});
