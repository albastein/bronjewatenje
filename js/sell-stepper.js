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

    $('form .btn-next').on('click', function() {
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
                parent_fieldset.fadeOut(400, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-huawei').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (brand_value == 'iphone') {
                parent_fieldset.fadeOut(400, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-iphone').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else {
                parent_fieldset.fadeOut(400, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-samsung').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }
        }



    });

    // previous step button in step 2
    $('form .btn-ps2').on('click', function() {
        var current_active_step = $(this).parents('form').find('.form-wizard.active');
        var progress_line = $(this).parents('form').find('.progress-line');

        $(this).parents('fieldset').fadeOut(400, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.all-brands').fadeIn();
            scroll_to_class($('form'), 20);
        });
    });

    // previous step button in step 3

    // previous step button in step 4

    // previous step button in step 5

    // previous step button in step 6

    // previous step button in step 7


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