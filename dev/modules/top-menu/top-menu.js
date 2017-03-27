"use strict";

import './top-menu.scss';

import {openBlock, getBlock} from './../feature-block/feature-block.js';
import {promiseHeaderHeight} from './../header/header.js';

const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu';
const $buttonAnchor = '.top-menu__link_anchor';
const $innerPage = '.inner-page';

let anchor = '';
let block = '';
let menuActive = false;
let headerHeight = 0;

function getAttr(key, url) {
    let s = url;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

function $_GET(key) {
    let s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

$(window).on('load', function () {
    promiseHeaderHeight.then(
        result => {
            headerHeight = result;

            if ($_GET('id') && $($innerPage).length == 0) {
                anchor = $_GET('id');

                block = getBlock("#"+anchor);
                if (block.length > 0) {
                    openBlock("#"+anchor);
                    $('html, body').animate({scrollTop: $(block).offset().top - headerHeight}, 1000);
                }

                if ($("#"+anchor).length > 0) {
                    $('html, body').animate({scrollTop: $("#"+anchor).offset().top - headerHeight}, 1000);
                }
            }
        }
    );

    $($button).click(function () {
        menuActive = !menuActive;
        $($menu).slideToggle();
        $($button).toggleClass(activeButton);
    });

    $($buttonAnchor).click(function () {
        anchor = getAttr('id', $(this).attr("href"));

        openBlock("#"+anchor);
        block = getBlock("#"+anchor);

        if (block.length > 0) {
            $('html, body').animate({scrollTop: $(block).offset().top - headerHeight}, 1000);
            return false;
        }

        if ($("#"+anchor).length > 0) {
            $('html, body').animate({scrollTop: $("#"+anchor).offset().top - headerHeight}, 1000);
            return false;
        }
    });
});
