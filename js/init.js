(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel({indicators: true, fullwith: true, duration: 500});

    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 2500);
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space
