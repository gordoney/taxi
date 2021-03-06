"use strict";

import './slider.scss';

import slick from 'slick-carousel';

const $slider = '.slider__slick';
const $dot = '.slider__dot';
const $dotWrapper = '.slider__dot-wrapper';
const dotActive = 'slider__dot-wrapper_active';

function setSlide (active) {
    $($slider).slick('slickGoTo', active);
}

function setActiveDot (active) {
    $($dotWrapper).removeClass(dotActive);

    $($dot).each(function () {
        if (active == Number($(this).attr('data-dot'))) {
            $(this).closest($dotWrapper).addClass(dotActive);
        }
    });
}

$(document).ready(function () {
    $($slider).slick({
        arrows: false,
        fade: true,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $($dot).click(function () {
        setSlide ($(this).attr('data-dot'));
        setActiveDot ($(this).attr('data-dot'));
    });

    $($slider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setActiveDot (nextSlide);
    });
});
