"use strict";

import './small-banner.scss';

const $banner = '.small-banner';

let bannerHeight = '';
let promiseBannerHeight = '';
let promiseBannerHeightResize = '';

function setBannerHeight ($banner, bannerHeight) {
    return new Promise((resolve) => {
        bannerHeight = $($banner).outerHeight();
        resolve(bannerHeight);
    });
}

$(window).on('load', function () {
    promiseBannerHeight = setBannerHeight ($banner, bannerHeight);

    $(window).resize(function () {
        promiseBannerHeightResize = setBannerHeight ($banner, bannerHeight);
    });
});

export {promiseBannerHeight, promiseBannerHeightResize};
