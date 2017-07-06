/*!
 * Fraggy Backend Theme v1.7.0
 * Jonathan Nessier, Neoflow (https://neoflow.ch) | Licensed under MIT
 * Responsive and Bootstrap based backend theme for WBCE
 */

// Initialize resize listener
$(function () {
    var $window = $(window),
            $navXsStacked = $('ul.nav-xs-stacked');

    $window.on('resize theme-resize', function () {
        if ($window.outerWidth() > 768) {
            $navXsStacked.removeClass('nav-stacked');
        } else {
            $navXsStacked.addClass('nav-stacked');
        }
    }).trigger('theme-resize');
});