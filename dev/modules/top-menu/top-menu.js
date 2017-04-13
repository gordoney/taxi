"use strict";

import './top-menu.scss';

import {openBlock, getBlock} from './../feature-block/feature-block.js';
import {promiseHeaderHeight} from './../header/header.js';
import {promiseHorizontalHeight} from './../horizontal-menu/horizontal-menu.js';
import isMobile from 'ismobilejs';


const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu';
const $buttonAnchor = '.top-menu__link_anchor';
const $innerPage = '.inner-page';

let anchor = '';
let block = '';
let menuActive = false;
let headerHeight = 0;
let horizontalHeight = 0;

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
    Promise.all([
        promiseHorizontalHeight,
        promiseHeaderHeight
    ]).then(results => {
        horizontalHeight = results[0];
        headerHeight = results[1];

        if ($_GET('id')) {
            anchor = $_GET('id');

            block = getBlock("#"+anchor);

            if (block.length > 0) {
                openBlock("#"+anchor);
                if (isMobile.phone) {
                    $('html, body').animate({scrollTop: $(block).offset().top}, 1000);
                } else {
                    $('html, body').animate({scrollTop: $(block).offset().top - headerHeight - horizontalHeight}, 1000);
                }
            }
        }
    });

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
            if (isMobile.phone) {
                $('html, body').animate({scrollTop: $(block).offset().top}, 1000);
            } else {
                $('html, body').animate({scrollTop: $(block).offset().top - headerHeight - horizontalHeight}, 1000);
            }
            return false;
        }
    });
});
