/*Radio*/
// Model buttons

$(document).ready(function() {
    // add/remove checked class
    $(".mbf").each(function() {
        if ($(this).find('input[type="radio"]').first().attr("checked")) {
            $(this).addClass('mbf-checked');
        } else {
            $(this).removeClass('mbf-checked');
        }
    });

    // sync the input state
    $(".mbf").on("click", function(e) {
        $(".mbf").removeClass('mbf-checked');
        $(this).addClass('mbf-checked');
        var $radio = $(this).find('input[type="radio"]');
        $radio.prop("checked", !$radio.prop("checked"));

        e.preventDefault();
    });
});

// Capacity buttons

$(document).ready(function() {
    // add/remove checked class
    $(".cbf").each(function() {
        if ($(this).find('input[type="radio"]').first().attr("checked")) {
            $(this).addClass('cbf-checked');
        } else {
            $(this).removeClass('cbf-checked');
        }
    });

    // sync the input state
    $(".cbf").on("click", function(e) {
        $(".cbf").removeClass('cbf-checked');
        $(this).addClass('cbf-checked');
        var $radio = $(this).find('input[type="radio"]');
        $radio.prop("checked", !$radio.prop("checked"));

        e.preventDefault();
    });
});

// Working Status buttons

$(document).ready(function() {
    // add/remove checked class
    $(".wsbf").each(function() {
        if ($(this).find('input[type="radio"]').first().attr("checked")) {
            $(this).addClass('wsbf-checked');
        } else {
            $(this).removeClass('wsbf-checked');
        }
    });

    // sync the input state
    $(".wsbf").on("click", function(e) {
        $(".wsbf").removeClass('wsbf-checked');
        $(this).addClass('wsbf-checked');
        var $radio = $(this).find('input[type="radio"]');
        $radio.prop("checked", !$radio.prop("checked"));

        e.preventDefault();
    });
});

// Accessories buttons

$(document).ready(function() {
    // add/remove checked class
    $(".acbf").each(function() {
        if ($(this).find('input[type="radio"]').first().attr("checked")) {
            $(this).addClass('acbf-checked');
        } else {
            $(this).removeClass('acbf-checked');
        }
    });

    // sync the input state
    $(".acbf").on("click", function(e) {
        $(".acbf").removeClass('acbf-checked');
        $(this).addClass('acbf-checked');
        var $radio = $(this).find('input[type="radio"]');
        $radio.prop("checked", !$radio.prop("checked"));

        e.preventDefault();
    });
});