/*!
 * Fraggy Backend Theme v1.6.0-beta2
 * Jonathan Nessier, Neoflow (https://neoflow.ch) | Licensed under MIT
 * Responsive and Bootstrap based backend theme for WBCE
 */
var Theme = (function () {

    this.init = function () {
        initStylesheetSwitcher();
        initResizeListener();
        loadPhpVersion();
        initVendorPlugins();
    };

    var initStylesheetSwitcher = function () {

        var $switchableLink = $('#switchable');

        $('#stylesheet-switcher a').on('click', function (e) {
            e.preventDefault();

            var cssFile = $(this).blur().attr('href');

            $('body').fadeTo(400, 0, function () {

                var $body = $(this),
                        $newSwitchableLink = $('<link>', {
                            'rel': 'stylesheet',
                            'type': 'text/css',
                            'href': cssFile
                        });

                Cookies.set('cssFile', cssFile);

                $switchableLink.after($newSwitchableLink);

                $newSwitchableLink.load(function () {
                    $switchableLink.remove();
                    $switchableLink = $newSwitchableLink;
                    $body.fadeTo(400, 1);
                });
            });
        });

        if (Cookies.get('cssFile') !== undefined) {
            $switchableLink.attr('href', Cookies.get('cssFile'));
        }
    };

    var initResizeListener = function () {
        var $window = $(window),
                $navXsStacked = $('ul.nav-xs-stacked'),
                $serverInfoPanel = $('div#serverInfoPanel');

        $window.on('resize theme-resize', function () {
            if ($window.outerWidth() > 768) {
                $navXsStacked.removeClass('nav-stacked');
                $serverInfoPanel.find('h3 > a[href="collapsed"]').trigger('click');
            } else {
                $navXsStacked.addClass('nav-stacked');
            }
        }).trigger('theme-resize');
    };

    var loadPhpVersion = function () {
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
    };

    var initVendorPlugins = function () {

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
    };

    return {
        init: init
    };
})();


