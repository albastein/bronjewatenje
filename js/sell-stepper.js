function scroll_to_class(element_class, removed_height) {
    var scroll_to = $(element_class).offset().top - removed_height;
    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({ scrollTop: scroll_to }, 0);
    }
}

function bar_progress(progress_line_object, direction) {
    var number_of_steps = progress_line_object.data('number-of-steps');
    var now_value = progress_line_object.data('now-value');
    var new_value = 0;
    if (direction == 'right') {
        new_value = now_value + (100 / number_of_steps);
    } else if (direction == 'left') {
        new_value = now_value - (100 / number_of_steps);
    }
    progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {

    $('form fieldset:first').fadeIn('slow');

    // Clear checked values of radio buttons on returning to previous step

    $('form .btn-previous').on('click', function() {
        $('.sell-rdb').prop('checked', false);
        $('.sell-rdb').parent().removeClass('mbf-checked');
        $('.sell-rdb').parent().removeClass('cbf-checked');
    });

    // Step 1 (brand) Next button

    $('form .brand-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var current_active_step = $(this).parents('form').find('.form-wizard.active');
        var progress_line = $(this).parents('form').find('.progress-line');
        var brand = document.getElementById("sell-wiz").elements["brand"];
        var brand_value = brand.value;

        // Validation

        /*
        parent_fieldset.find('input[type="text"], input[type="password"], input[type="username"], input[type="email"], input[type="tel"], input[type="url"], textarea').each(function() {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        */

        // Brand selector validation

        /*
        parent_fieldset.find('input[type="radio"]').each(function() {
            if ($(this).prop("checked") == false) {
                alert('Please answer all questions');
                next_step = false;
            } else {
                $('.form-check-label').css("color", "black");
            }
        });

        */

        if (next_step) {
            if (brand_value == 'huawei') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-huawei').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (brand_value == 'iphone') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-iphone').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (brand_value == 'samsung') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-samsung').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }

            $('.sell-rdb').prop('checked', false);
            $('.sell-rdb').parent().removeClass('image-radio-checked');
        }
    });

    /* Step 2 (model) buttons */
    // Previous

    $('form .model-btn-previous').on('click', function() {
        var current_active_step = $(this).parents('form').find('.form-wizard.active');
        var progress_line = $(this).parents('form').find('.progress-line');

        $(this).parents('fieldset').fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.all-brands').fadeIn();
            scroll_to_class($('form'), 20);
        });
    });

    // Next
    $('form .model-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var current_active_step = $(this).parents('form').find('.form-wizard.active');
        var progress_line = $(this).parents('form').find('.progress-line');
        var model = document.getElementById("sell-wiz").elements["model"];
        var model_value = model.value;

        if (next_step) {

            // Huawei models

            if (model_value == 'Huawei P20 Pro') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp20pro').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P20') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp20').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P20 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp20l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P10 Plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp10p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P10') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp10').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P10 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp10l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P9 Plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp9p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P9') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp9').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P9 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp9l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P8 Lite (2017)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp8l17').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P8 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp8l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 10 Pro') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm10p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 10') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm10').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 9') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm9').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P Smart') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hps').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }

            // iPhone models
            else if (model_value == 'iPhone X') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ipx').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 8 plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip8p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 7 plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip7p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 7') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip7').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6s plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6sp').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6 plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6s') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6s').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 5s') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip5s').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 5c') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip5c').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 5') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip5').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone SE') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ipse').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }

            // Samsung models
            else if (model_value == 'Galaxy S9p') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs9p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S9') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs9').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S8p') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs8p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S7 Edge') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs7e').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S7') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs7').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S6 Edge p') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs6ep').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S6 Edge') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs6e').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S6') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs6').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S5') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs5').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S4') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs4').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Note 8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gn8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Note 5') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gn5').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Edge') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ge').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Note 4') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gn4').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Note 3') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gn3').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A8 (2018)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga818').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A7 (2017)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga717').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A7 (2016)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga716').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A7') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga7').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A5 (2017)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga517').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A5 (2016)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga516').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A5') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga5').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A3 (2016)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga316').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A3') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga3').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy J7 (2016)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gj716').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy J7 Prime') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gj7p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy J5 Prime') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gj5p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }

            // Remove checked status
            $('.sell-rdb').prop('checked', false);
            $('.sell-rdb').parent().removeClass('mbf-checked');
        }
    });

    /* Step 3 (capacity) buttons */
    // Previous
    // Huawei
    $('form .hc-btn-previous').on('click', function() {
        var current_active_step = $(this).parents('form').find('.form-wizard.active');
        var progress_line = $(this).parents('form').find('.progress-line');

        $(this).parents('fieldset').fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.model-huawei').fadeIn();
            scroll_to_class($('form'), 20);
        });
    });

    // iPhone
    $('form .ic-btn-previous').on('click', function() {
        var current_active_step = $(this).parents('form').find('.form-wizard.active');
        var progress_line = $(this).parents('form').find('.progress-line');

        $(this).parents('fieldset').fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.model-iphone').fadeIn();
            scroll_to_class($('form'), 20);
        });
    });

    // Samsung
    $('form .sc-btn-previous').on('click', function() {
        var current_active_step = $(this).parents('form').find('.form-wizard.active');
        var progress_line = $(this).parents('form').find('.progress-line');

        $(this).parents('fieldset').fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.model-samsung').fadeIn();
            scroll_to_class($('form'), 20);
        });
    });

    // next



    /* previous step button in step 4 */
    // previous

    // next



    /* previous step button in step 5 */
    // previous

    // next



    /* previous step button in step 6 */
    // previous

    // next



    /* previous step button in step 7 */
    // previous

    // next




    $('form').on('submit', function(e) {
        $(this).find('input[type="text"], input[type="password"], input[type="username"], input[type="email"], input[type="tel"], input[type="url"], textarea').each(function() {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });
    });

});

// Validation 

/* 
function validateRadio(radios) {
    for (i = 0; i < radios.length; ++i) {
        if (radios[i].checked) return true;
    }
    return false;
}

function validateForm() {
    if (validateRadio(document.forms["sell-wiz"]["brand"])) {
        return true;
    } else {
        alert('Please answer all questions');
        return false;
    }
}
*/