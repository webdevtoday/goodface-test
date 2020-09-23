$(document).ready(function(){
    $('.slider-bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-top',
        infinite: false,
        adaptiveHeight: true,
        appendArrows: $('.slider__top .slider-buttons'),
        prevArrow: `<button type="button" class="slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none"><path d="M10 2L3 9L10 16" stroke="#14171A" stroke-width="3"/></svg></button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none"><path d="M10 2L3 9L10 16" stroke="#14171A" stroke-width="3"/></svg></button>`,
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    appendArrows: $('.slider-mobile-panel .slider-buttons'),
                }
            }
        ],
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
        arrows: false,
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });

    // $(window).resize(function() {
    //     console.log('aaaaaaa');
    //     if ($(window).outerWidth() <= 767.98) {
    //         console.log('hhhf');
    //         $('.slider-mobile-panel div').replaceWith($('.slider__top .slider-buttons'));
    //     }
    // });
        

    const $statusCurrent = $('.slider-counter__current');
    const $statusCount = $('.slider-counter__count');
    const $slickElement = $('.slider-bottom');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        let i = (currentSlide ? currentSlide : 0) + 1;
        $statusCurrent.text(i);
        $statusCount.text(slick.slideCount);
    });
    
});