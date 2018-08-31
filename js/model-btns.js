/*Radio*/

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