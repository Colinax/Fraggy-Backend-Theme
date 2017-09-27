// Custom brand image replacement
$(function () {

    var $brandImg = $('.brand img'),
            backendThemeLogoUrl = WB_URL + '/media/backend-theme-logo.png';

    if (!sessionStorage.getItem('backendThemeLogoUrl')) {
        $.ajax({
            url: backendThemeLogoUrl,
            cache: true,
            processData: false,
            error: function () {
                backendThemeLogoUrl = THEME_URL + '/images/theme-logo.png';
            }
        }).always(function () {
            sessionStorage.setItem('backendThemeLogoUrl', backendThemeLogoUrl);
            $brandImg.attr('src', backendThemeLogoUrl).show();
        });
    }

});