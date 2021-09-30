$(".Menu .fa-bars").click(function () { 
    
        let menuList=  $(".Menu ul").outerWidth();
        
        
            $(".Menu ul").animate({left:0}, 1000 );
            $(this).animate({left:menuList}, 1000);        
});



$(".Menu .fa-times").click(function(){
    let menuList=  $(".Menu ul").outerWidth();
    $(".Menu ul").animate({left:-menuList}, 1000 );
    $(".Menu .fa-bars").animate({left:0}, 1000 );
});

$(".singer h2").click(function () { 
    $(this).next().slideToggle(500)
    $(".singer p").not($(this).next()).slideUp(500)
});



(function() {

    
    (function updateTime() {
    var countDownDate = new Date(new Date("Dec 31, 2021").toString()).getTime(),
        now = new Date().getTime(),
        distance = countDownDate - now,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

    if (distance > 0) {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    $(".days").html(days)
    $(".hours").html(hours)
    $(".minutes").html(minutes)
    $(".seconds").html(seconds)

    setTimeout(updateTime, 1000);
    })();
    
})();


$("#massage").keyup(function () { 
    let letter=100
    if($('#massage').val().length <= 100)
    {
        $(".letterLength").html(letter-$('#massage').val().length)
    }
    else if($('#massage').val().length > 0) 
    {
        $(".letterLength").html("your available character finished")
    }
});


$(".menu a").click(function(){
    
    let sectionId= $(this).attr("href");
    
    let positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})

