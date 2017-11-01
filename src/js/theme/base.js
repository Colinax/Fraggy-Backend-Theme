$(function () {

    // Event listener for auto submit
    $('form.auto-submit').on('change', function () {
        $(this).submit();
    });

    // Prevent default click behaviour for disabled anchors
    $('a[disabled]').preventDefaultClickBehaviour();

    // Move to the correct anchor after CKeditor instances are ready
    if (typeof CKEDITOR !== 'undefined' && window.location.hash !== '') {
        var numberOfInstances = Object.keys(CKEDITOR.instances).length,
                numberOfReadyInstances = 0;

        // Count and move until all instances are ready
        CKEDITOR.on('instanceReady', function () {
            numberOfReadyInstances++;
            if (numberOfReadyInstances === numberOfInstances) {
                $(window).scrollTop($(window.location.hash).offset().top - 75);
            }
        });
    }

});

// Plugin to prevent default click behaviour
$.fn.preventDefaultClickBehaviour = function () {
    $(this).on('click', function (e) {
        e.preventDefault();
    });

    return this;
};
