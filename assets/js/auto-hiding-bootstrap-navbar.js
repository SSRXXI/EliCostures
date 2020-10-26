/*
    Created by José Antonio Mazón San Bartolomé.
        Find me in:
			Linkedin (https://www.linkedin.com/in/joseantmazonsb)
            Github (https://github.com/TheYuju12)

    Designed for a fixed or sticky top navbar. 
    If your navbar is fixed bottom you can adjust the behaviour by assigning navOffset a negative value.

*/


$(document).ready(function () {
    var lastScrollTop = 0;
  var $navbar = $('.navbar');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if (st > lastScrollTop) { // scroll down
      
      // use this is jQuery full is used
      $navbar.fadeOut()
      
      // use this to use CSS3 animation
      // $navbar.addClass("fade-out");
      // $navbar.removeClass("fade-in");
      
      // use this if no effect is required
      // $navbar.hide();
    } else { // scroll up
      
      // use this is jQuery full is used
      $navbar.fadeIn()
      
      // use this to use CSS3 animation
      // $navbar.addClass("fade-in");
      // $navbar.removeClass("fade-out");
      
      // use this if no effect is required
      // $navbar.show();
    }
    lastScrollTop = st;
  });
});
