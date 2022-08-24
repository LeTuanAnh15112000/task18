


$(document).ready(function () {
    $(".is-menu1").hover(function(){
        $(".is-hover1").fadeToggle("slow");
    });
    $(".is-menu2").hover(function(){
        $(".is-hover2").fadeToggle("slow");
    });
    
    // slick slider pickup
    $('.c-mainvisual__bg').slick({
        slidesToScroll: 1,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.is-slick-prev'),
        nextArrow: $('.is-slick-next'),
    });
        
    // scroll 100vh dispaly scroll
    $(document).ready(function(){
        $("#is-backtop").hide()
        var windowHeight = $(window).height();
        $(window).scroll(function(){
            // window hdeight ~ 100vh
            if($(this).scrollTop() > windowHeight ){
               $('#is-backtop').fadeIn("linear");
            }else{
                $('#is-backtop').fadeOut();
            }
        })
        $("#is-backtop").click(function(){
            $('html, body').animate({scrollTop: 0});
        })
    })
});
