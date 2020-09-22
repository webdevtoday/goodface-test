$(document).ready(function(){
    $('.slider-bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-top',
        infinite: false,
        adaptiveHeight: true,
    });
    $('.slider-top').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-bottom',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true,
        infinite: false,
        appendArrows: $('.slider-buttons'),
        prevArrow: `<button type="button" class="slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none"><path d="M10 2L3 9L10 16" stroke="#14171A" stroke-width="3"/></svg></button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none"><path d="M10 2L3 9L10 16" stroke="#14171A" stroke-width="3"/></svg></button>`,
    });
});