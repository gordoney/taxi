'use strict';

import './header.scss';

const $header = '.header';
const $headerFix = '.header__fix';

let headerHeight = '';
let promiseHeaderHeight = '';
let promiseHeaderHeightResize = '';
let resizeTimer;

function setHeaderFix (headerFix, headerHeight) {
    $(headerFix).css('height', headerHeight + 'px');
}

function setHeaderHeight ($header, headerHeight) {
    return new Promise((resolve) => {
        headerHeight = $($header).outerHeight();
        resolve(headerHeight);
    });
}

$(window).on('load', function () {
    promiseHeaderHeight = setHeaderHeight ($header, headerHeight);

    promiseHeaderHeight.then(
        result => {
            setHeaderFix ($headerFix, result);
        }
    );

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            promiseHeaderHeightResize = setHeaderHeight ($header, headerHeight);

            promiseHeaderHeightResize.then(
                result => {
                    setHeaderFix ($headerFix, result);
                }
            );
        }, 250);
    });
});

export {promiseHeaderHeight, promiseHeaderHeightResize};
