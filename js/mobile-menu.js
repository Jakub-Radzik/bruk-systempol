$(document).ready(function(){
    $(".mobile-btn").click(function(){
      $(".mobile").slideToggle("slow");
    });

    $(window).resize(function(){
        $(".mobile").slideUp(500);
    });

    $(document).scroll(function(){
        $(".mobile").slideUp(500);
    });

    $(".mobile li").click(function(){
        $("#mobile").slideUp(500);
    });

  });