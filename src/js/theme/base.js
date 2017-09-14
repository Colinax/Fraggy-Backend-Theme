$(function () {

    // Event listener for auto submit
    $('form.auto-submit').on('change', function () {
        $(this).submit();
    });

    // Prevent default click behaviour for disabled anchors
    $('a[disabled]').preventDefaultClickBehaviour();

});

// Plugin to prevent default click behaviour
$.fn.preventDefaultClickBehaviour = function () {
    $(this).on('click', function (e) {
        e.preventDefault();
    });

    return this;
};
