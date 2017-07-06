/*!
 * Fraggy Backend Theme v1.7.0-beta2
 * Jonathan Nessier, Neoflow (https://neoflow.ch) | Licensed under MIT
 * Responsive and Bootstrap based backend theme for WBCE
 */

// Initialize vendor plugins
$(function () {
    $('input:file').fileselect();

    $('select').select2({
        theme: 'bootstrap',
        minimumResultsForSearch: 5,
        width: '100%',
        dropdownAutoWidth: true
    }).focus(function () {
        $(this).select2('open');
    });

    $('.datetimepicker').each(function () {
        var $this = $(this);
        $this.datetimepicker({
            locale: $this.data('language') || navigator.language || navigator.userLanguage,
            format: $this.data('format') ? $this.data('format') : 'DD.MM.Y HH:mm',
            extraFormats: ['M/D/Y HH:mm'],
            useCurrent: false
        });
    });
});