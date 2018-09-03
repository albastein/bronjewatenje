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