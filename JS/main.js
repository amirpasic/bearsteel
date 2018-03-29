

$(document).ready(function(){
    
    // Navigation Bar
    
    $(".navigation-bar").hover(
    function() {
        $(this).css("opacity", 1);
    },
    function() {
        $(this).css("opacity", 0.8);
    });

    // Parallax

    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
                
        $(".parallax").css("background-position",
        "center" + " " + (scrolled * 0.7) + "px" );

    });

    // Header transition

    $(".content h1").hover(
        function(){
            $(this).css({
                "border" : "8px solid #F7F7F2",
                "color" : "#F7F7F2",
                "background-color" : "#121113",
                "outline" : "3px solid #121113"
            });
        },
        function(){
            $(this).css({
                "border" : "8px solid #121113",
                "color" : "#121113",
                "background-color" : "F7F7F2"
            });
        });

    // Cover over images
    
    $(".img-wrapper").hover(function(){
        $(this).find(".cover").fadeIn("fast");
    },
    function(){
        $(this).find(".cover").fadeOut("fast");
    });

    $(".cover").hover(
    function(){
        $(this).find(".content").css("bottom",0);
    },
    function(){
        $(this).find(".content").css("bottom","-100px")
    });

    $(".image-wrapper").hover(function(){
        $(this).find(".cover").fadeIn("fast");
    },
    function(){
        $(this).find(".cover").fadeOut("fast");
    });

    $(".cover").hover(
    function(){
        $(this).find(".text").css("bottom", "30px");
    },
    function(){
        $(this).find(".text").css("bottom","-100px")
    });

});

