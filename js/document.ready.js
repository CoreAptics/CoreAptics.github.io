$(document).ready(function () {
    $('.lame7-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
    
    $('.lame8-bis').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });

    
    $('.arrow-prev').click(function(){
        $('.lame7-carousel').slick('slickPrev');
    });
    
    $('.arrow-next').click(function(){
        $('.lame7-carousel').slick('slickNext');
    });
    
    $('.arrow-prev2').click(function(){
        $('.lame11-carousel').slick('slickPrev');
    });
    
    $('.arrow-next2').click(function(){
        $('.lame11-carousel').slick('slickNext');
    });
    
    
    
    
    $('.social .object').mouseenter(function(){
    var index = $(this).attr('data-index');
        $(this).addClass('active');
        $('.social .object img:last-child').addClass('hidden');
        $('.social div[data-index='+ index +'].object img.hidden').removeClass('hidden');
    });
    
    $('.social .object').mouseleave(function(){
        var index = $(this).attr('data-index');
        $(this).removeClass('active');
        $('.social div[data-index='+ index +'].object img:last-child').addClass('hidden');
    });
});