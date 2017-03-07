"use strict";

import './advantage.scss';

const block = '.advantage__text';

let maxHeight = 0;

$(window).on('load', function() {
    $(block).each(function () {
        if (maxHeight < $(this).outerHeight()) {
            maxHeight = $(this).outerHeight();
        }
    });

    $(block).css('height', maxHeight);
});
