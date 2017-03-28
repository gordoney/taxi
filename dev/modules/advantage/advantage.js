"use strict";

import './advantage.scss';

const block = '.advantage__text';

let maxHeight = 0;
let resizeTimer;

$(window).on('load', function() {
    $(block).each(function () {
        if (maxHeight < $(this).outerHeight()) {
            maxHeight = $(this).outerHeight();
        }
    });

    $(block).css('height', maxHeight);

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            $(block).each(function () {
                if (maxHeight < $(this).outerHeight()) {
                    maxHeight = $(this).outerHeight();
                }
            });

            $(block).css('height', maxHeight);
        }, 250);
    });
});
