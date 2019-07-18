// Load language file for select2
$.getScript(THEME_URL + '/js/select2/i18n/' + LANGUAGE_CODE + '.js');

// Initialize Select2
$(function () {
    $('select:not(.nos2)')
        .select2({
            theme: 'bootstrap',
            //  minimumResultsForSearch: -1,
            width: '100%',
            dropdownAutoWidth: false,
            templateResult: function (item) {
                if (item.hasOwnProperty('element')) {
                    var $element = $(item.element);
                    if ($element.data('level')) {
                        var level = $element.data('level');
                        return $('<span style="padding-left:' + (20 * parseInt(level)) + 'px;">' + item.text + '</span>');
                    } else if ($element.data('description')) {
                        var description = $element.data('description');
                        return $('<span>' + item.text + '</span><br /><small>' + description + '</small>');
                    }
                }
                return item.text;
            }
        })
        .on('select2:ready change', function () {
            $(this).find('+ .select2 .select2-selection__choice__remove').empty();
        })
        .trigger('select2:ready')
        .focus(function () {
            $(this).select2('open');
        });
});
