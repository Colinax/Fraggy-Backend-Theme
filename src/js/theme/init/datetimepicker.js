// Initialize Bootstrap Datetimepicker
$(function () {

    $('.datetimepicker').each(function () {
        var $this = $(this);
        console.log($this.data('format') ? replaceAll($this.data('format'), '%', '') : 'DD.MM.Y HH:mm');
        $this.datetimepicker({
            locale: $this.data('language') || LANGUAGE_CODE,
            format: 'DD.MM.Y HH:mm',
            useCurrent: false
        });
    });

});