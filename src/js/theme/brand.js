// Custom brand image replacement
$(function () {

    var $brandImg = $('.brand img'),
            backendThemeLogoUrl = WB_URL + '/media/backend-theme-logo.png';
    $.ajax({
        url: backendThemeLogoUrl,
        cache: true,
        processData: false,
        error: function () {
            backendThemeLogoUrl = THEME_URL + '/images/theme-logo.png';
        },
    }).always(function () {
        $brandImg.attr('src', backendThemeLogoUrl).show();
    });

});