"use strict";

import './modal.scss';

const $modalButton = '.modal__app-button';
const $modal = '.modal';
const $closeButton = '.modal__close';
const $layout = '.modal__layout';
const bodyModalOpen = 'modal__open'
const modalOpen = 'modal_open'

$(document).ready(function () {
    $($modalButton).click(function (e) {
        e.preventDefault();
        let modalAttr = $(this).attr('data-modal-button');

        openModal (modalAttr);
    });

    $($layout).click(function (e) {
        closeModal ();
    });

    $($closeButton).click(function (e) {
        closeModal ();
    });

    function closeModal () {
        $('body').removeClass(bodyModalOpen);
        $($modal).removeClass(modalOpen);
    }

    function openModal (attr) {
        $('body').addClass(bodyModalOpen);
        $('.modal[data-modal="'+attr+'"]').addClass(modalOpen);
    }
});
