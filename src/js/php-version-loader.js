/*!
 * Fraggy Backend Theme v1.7.0-beta2
 * Jonathan Nessier, Neoflow (https://neoflow.ch) | Licensed under MIT
 * Responsive and Bootstrap based backend theme for WBCE
 */

// Initialize stylesheet switcher
$(function () {
    $.ajax({
        dataType: 'json',
        url: THEME_URL + '/api/sysinfo.php',
        success: function (data) {
            $('ul.versions').find('.php').text(data.php.version);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('ul.versions').find('.php').parent().remove();
        }

    });

});