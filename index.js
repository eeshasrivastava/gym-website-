/* .................................background fading....................*/


$(window).scroll(function(){
  $(".content1").css("opacity", 1 - $(window).scrollTop() / 350);
});

$(window).scroll(function(){
  $(".content").css("opacity", 1 - $(window).scrollTop() / 800);
});
