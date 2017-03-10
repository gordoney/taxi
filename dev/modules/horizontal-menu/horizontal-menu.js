'use strict';

import './horizontal-menu.scss';

import {getBlock} from './../feature-block/feature-block';
import {promiseHeaderHeight} from './../header/header';

const $menu = '.horizontal-menu';
const $headerFix = '.horizontal-menu__fix';
const $buttonAnchor = '.horizontal-menu__link_anchor';

let anchor = '';
let block = '';
let headerHeight = '';
let menuHeight = '';

function setMenuFix ($headerFix, menuHeight) {
    $($headerFix).css('height', menuHeight + 'px');
}

function $_GET(key) {
    let s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

function getAttr(key, url) {
    let s = url;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

function scrollPage(block, headerHeight) {
    $('html, body').animate({scrollTop: $(block).offset().top - headerHeight}, 1000);
}

$(window).on('load', function () {
    promiseHeaderHeight.then(
        result => {
            $($menu).css('top', result + 'px');
            headerHeight = result + $($menu).outerHeight();

            if ($_GET('id')) {
                anchor = $_GET('id');

                block = getBlock("#"+anchor);

                scrollPage(block, headerHeight);
            }
        }
    );

    menuHeight = $($menu).outerHeight();
    setMenuFix ($headerFix, menuHeight);

    $(window).resize(function () {
        menuHeight = $($menu).outerHeight();
        setMenuFix ($headerFix, menuHeight);
    });

    $($buttonAnchor).click(function (e) {
        anchor = getAttr('id', $(this).attr("href"));

        block = getBlock("#"+anchor);

        if (block.length > 0) {
            scrollPage(block, headerHeight);
            return false;
        }
    });
});
