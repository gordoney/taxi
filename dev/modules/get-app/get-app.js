"use strict";

import './get-app.scss';

const $button = '.get-app__button';
const $field = '.get-app__field';
const $errorField = '.get-app__error';
const $successField = '.get-app__success';

let value = false;
let error = false;
let errorText = '';
let response = '';

function validatePhone(phone) {
    var re = /^((\+375)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/;

    return re.test(phone);
}

$(document).ready(function () {
    $($button).click(function (e) {
        e.preventDefault();
        error = false;
        errorText = '';

        value = $($field).val();
        response = grecaptcha.getResponse();

        if (value == '') {
            error = true;
            errorText += 'Укажите верный номер телефона<br>';
        }

        if (response.length == 0) {
            error = true;
            errorText += 'Пройдите проверку капчи<br>';
        }

        if (!error) {
            errorText = '';
            $($errorField).html(errorText);

            $.ajax({
                url: '/sms.php',
                type: 'POST',
                data: "response=" + response + "&phone=" + value,
                success: function success(data) {
                    if (data == 'success') {
                        $($successField).html('Спасибо! Ваш запрос успешно отправлен');
                    } else {
                        $($errorField).html('Произошла ошибка при отправке. Попробуйте ещё раз.');
                    }
                }
            });
        } else {
            $($errorField).html(errorText);
        }
    });
});
