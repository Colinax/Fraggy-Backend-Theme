// Initialize Bootstrap Datetimepicker
$(function () {

    $('.datetimepicker').each(function () {
        var $this = $(this);

        var $input = $this;
        if ($this.hasClass('input-group')) {
            $input = $this.find('input:first');

            var $inputGroupAddon = $this.find('.input-group-addon');
            if ($inputGroupAddon.length > 0) {
                $inputGroupAddon.on('click', (function (e) {
                    $input.focus();
                }));
            }
        }

        $input.datetimepicker({
            format: 'd.m.Y H:i',
        });
    });


});



//        var $this = $(this);
//        console.log($this.data('format') ? replaceAll($this.data('format'), '%', '') : 'DD.MM.Y HH:mm');
//        $this.datetimepicker({
//            locale: $this.data('language') || LANGUAGE_CODE,
//            format: 'DD.MM.Y HH:mm',
//            useCurrent: false
//        });