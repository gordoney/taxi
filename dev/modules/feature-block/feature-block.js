"use strict";

import './feature-block.scss';

import isMobile from 'ismobilejs';

const $button = '.feature-block__title';
const buttonDisable = 'feature-block__title_price';
const buttonActive = 'feature-block__title_active';
const $toggleBlock = '.feature-block__text';
const $block = '.feature-block';
const $disablePage = '.inner-page';

let currentBlock = '';

function openBlock (element) {
    currentBlock = $(element).closest($block);

    if (!$(currentBlock).find($button).hasClass(buttonActive)) {
        $(currentBlock).find($button).toggleClass(buttonActive);
    }
    $(currentBlock).find($toggleBlock).slideDown();
}

function getBlock (element) {
    return $(element).closest($block);
}

$(document).ready(function () {
    if (isMobile.phone && $($disablePage).length == 0) {
        $($button).click(function () {
            if (!$(this).hasClass(buttonDisable)) {
                $(this).toggleClass(buttonActive);
                $(this).closest($block).find($toggleBlock).slideToggle();
            }
        });
    }


});

export { openBlock, getBlock };
