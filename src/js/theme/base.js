$(function () {

    // Event listener for auto submit
    $('form.auto-submit').on('change', function () {
        $(this).submit();
    });

    // Prevent default click behaviour for disabled anchors
    $('a[disabled]').preventDefaultClickBehaviour();

    // Move to the correct anchor after CKeditor instances are ready
    if (typeof CKEDITOR !== 'undefined') {
        var numberOfInstances = Object.keys(CKEDITOR.instances).length,
                numberOfReadyInstances = 0;

        CKEDITOR.on('instanceReady', function () {
            numberOfReadyInstances++;
            if (numberOfReadyInstances === numberOfInstances) {
                console.log(numberOfReadyInstances);
                location.hash = window.location.hash;
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
