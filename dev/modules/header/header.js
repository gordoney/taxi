'use strict';

import './header.scss';

const $header = '.header';
const $headerFix = '.header__fix';

let headerHeight = '';
let promiseHeaderHeight = '';

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

    $(window).resize(function () {
        promiseHeaderHeight = setHeaderHeight ($header, headerHeight);

        promiseHeaderHeight.then(
            result => {
                setHeaderFix ($headerFix, result);
            }
        );
    });
});

export {promiseHeaderHeight};
