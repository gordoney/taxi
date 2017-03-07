"use strict";

import './top-menu.scss';

import {openBlock, getBlock} from './../feature-block/feature-block';
import {promiseHeaderHeight} from './../header/header';

const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu';
const $buttonAnchor = '.top-menu__link_anchor';

let anchor = '';
let block = '';
let menuActive = false;
let headerHeight = 0;

$(window).on('load', function () {
    promiseHeaderHeight.then(
        result => {
            headerHeight = result;
        }
    );

    $($button).click(function () {
        menuActive = !menuActive;
        $($menu).slideToggle();
        $($button).toggleClass(activeButton);
    });

    $($buttonAnchor).click(function (e) {
        e.preventDefault();
        anchor = $(this).attr("href");

        openBlock(anchor);
        block = getBlock(anchor);

        $('html, body').animate({scrollTop: $(block).offset().top - headerHeight}, 1000);
    });
});
