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

$(window).on('load', function () {
    if (isMobile.phone) {
        Promise.all([
            promiseBannerHeight,
            promiseHeaderHeight
        ]).then(results => {
            marginSize = $($banner).outerHeight() - $($bannerPhone).outerHeight();
            bannerHeight = $(window).outerHeight() - results[0] - results[1];

            phoneHeight = bannerHeight - marginSize;

            $($bannerPhone).css('height', phoneHeight + 'px');
            $($bannerPhone).css('min-height', phoneHeight + 'px');
        });

        $(window).resize(function () {
            Promise.all([
                promiseBannerHeightResize,
                promiseHeaderHeightResize
            ]).then(results => {
                marginSize = $($banner).outerHeight() - $($bannerPhone).outerHeight();
                bannerHeight = $(window).outerHeight() - results[0] - results[1];

                phoneHeight = bannerHeight - marginSize;

                $($bannerPhone).css('height', phoneHeight + 'px');
                $($bannerPhone).css('min-height', phoneHeight + 'px');
            });
        });
    }
});
