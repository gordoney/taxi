"use strict";

import './big-banner.scss';

import isMobile from 'ismobilejs';
import {promiseBannerHeight, promiseBannerHeightResize} from './../small-banner/small-banner';
import {promiseHeaderHeight, promiseHeaderHeightResize} from './../header/header';

const $banner = '.big-banner';
const $bannerPhone = '.big-banner__phone';

let bannerHeight = 0;
let marginSize = 0;
let phoneHeight = 0;
let backgroundMargin = 0;
let resizeTimer;

$(window).on('load', function () {
    console.log($(window).outerHeight());
    if (isMobile.phone) {
        Promise.all([
            promiseBannerHeight,
            promiseHeaderHeight
        ]).then(results => {
            if ($(window).outerHeight() > 450) {
                marginSize = $($banner).outerHeight() - $($bannerPhone).outerHeight();
                bannerHeight = $(window).outerHeight() - results[0] - results[1];

                phoneHeight = bannerHeight - marginSize;
                backgroundMargin = phoneHeight/100*5;

                $($bannerPhone).css('height', phoneHeight  + 'px');
                $($bannerPhone).css('min-height', phoneHeight + 'px');

                $($bannerPhone).css('max-width', '60%');
                $($bannerPhone).css('width', '60%');
            } else {
                $($bannerPhone).css('height', $(window).outerWidth()/100*40*1.5 + 'px');
                $($bannerPhone).css('min-height', $(window).outerWidth()/100*40*1.5 + 'px');

                $($bannerPhone).css('max-width', '40%');
                $($bannerPhone).css('width', '40%');
            }
        });

        $(window).resize(function () {
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {
                Promise.all([
                    promiseBannerHeightResize,
                    promiseHeaderHeightResize
                ]).then(results => {
                    if ($(window).outerHeight() > 450) {
                        marginSize = $($banner).outerHeight() - $($bannerPhone).outerHeight();
                        bannerHeight = $(window).outerHeight() - results[0] - results[1];

                        phoneHeight = bannerHeight - marginSize;
                        backgroundMargin = phoneHeight/100*5;

                        $($bannerPhone).css('height', phoneHeight + 'px');
                        $($bannerPhone).css('min-height', phoneHeight + 'px');

                        $($bannerPhone).css('max-width', '60%');
                        $($bannerPhone).css('width', '60%');
                    } else {
                        $($bannerPhone).css('height', $(window).outerWidth()/100*40*1.5 + 'px');
                        $($bannerPhone).css('min-height', $(window).outerWidth()/100*40*1.5 + 'px');

                        $($bannerPhone).css('max-width', '40%');
                        $($bannerPhone).css('width', '40%');
                    }
                });
            }, 250);
        });
    }
});
