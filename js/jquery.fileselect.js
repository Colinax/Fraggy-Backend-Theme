(function ($) {
    $.fn.fileselect = function (options) {

        var settings = $.extend({
            browseBtnClass: 'btn btn-primary',
            browseIcon: '<i class="fa fa-fw fa-folder-open"></i>',
            limit: -1
        }, options);

        var translations = {
            'en': {
                'browse': 'Browse'
            },
            'de': {
                'browse': 'Durchsuchen'
            },
            'fr': {
                'browse': 'Navigateur'
            }
        };

        var userLanguage = navigator.language || navigator.userLanguage;
        if ($.inArray(userLanguage, ['en', 'de', 'fr']) === -1) {
            userLanguage = 'en';
        }
        translations = translations[userLanguage];

        return this.each(function () {

            var $fileInput = $(this).hide();

            var data = $fileInput.data();
            $(data).each(function (key, value) {
                if ($.inArray(key, settings)) {
                    settings[key] = value;
                }
            });

            alert(settings.limit);

            var $inputGroup = $('<div>', {class: "input-group"}),
                    $inputGroupBtn = $('<label>', {class: 'input-group-btn'}),
                    $browseBtn = $('<span>', {class: settings.browseBtnClass}),
                    $labelInput = $('<input>', {type: 'text', class: 'form-control', readyonly: true});

            $fileInput.after($inputGroup);

            $inputGroup
                    .append($inputGroupBtn, $labelInput);

            $inputGroupBtn
                    .append($browseBtn)
                    .append($fileInput);

            $browseBtn
                    .text(translations['browse'])
                    .append(' &hellip;');

            if (settings.browseIcon) {
                $browseBtn.prepend(settings.browseIcon + ' ');
            }

        }).on('change', function () {

            var $fileInput = $(this),
                    files = $fileInput[0].files,
                    label = $.map(files, function (file) {
                        return file.name;
                    }).join(', ');

            $(this).parents('.input-group').find(':text').val(label);
        });

        function debug(obj) {
            if (window.console && window.console.log) {
                window.console.log("hilight selection count: " + obj.length);
            }
        }
        ;

    };
}(jQuery));