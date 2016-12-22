/*
 * Fraggy Backend Theme v1.5.5
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
                format: $this.data('format') ? $this.data('format') : 'DD.M.Y HH:mm',
                extraFormats: ['M/D/Y HH:mm'],
                useCurrent: false
            });
        });
    };

    return {
        init: init
    };
})();



$(function () {

    $('button, input[type="button"], input[type="reset"]')
            .addClass('btn')
            .addClass('btn-default');

    $('button[type="submit"], input[type="submit"]')
            .addClass('btn')
            .removeClass('btn-default')
            .addClass('btn-primary');

    $('input[type="text"], input[type="password"], textarea, select')
            .addClass('form-control');

    $('.sidebar-nav').each(function () {
        var $sidebarNav = $(this);

        if ($sidebarNav.find('li.current').length === 0) {
            $sidebarNav.find('li:first').addClass('current');
        }

        $sidebarNav.find('li.dashboard > a').prepend('<i class="icon fa fa-fw fa-tachometer fa-fw"></i> ');
        $sidebarNav.find('li.preferences > a').prepend('<i class="icon fa fa-fw fa-cog fa-fw"></i> ');
        $sidebarNav.find('li.pages > a').prepend('<i class="icon fa fa-fw fa-files-o fa-fw"></i> ');
        $sidebarNav.find('li.media > a').prepend('<i class="icon fa fa-fw fa-picture-o fa-fw"></i> ');
        $sidebarNav.find('li.addons > a').prepend('<i class="icon fa fa-fw fa-th"></i> ');
        $sidebarNav.find('li.settings > a').prepend('<i class="icon fa fa-fw fa-cogs fa-fw"></i> ');
        $sidebarNav.find('li.admintools > a').prepend('<i class="icon fa fa-fw fa-cubes fa-fw"></i> ');
        $sidebarNav.find('li.access > a').prepend('<i class="icon fa fa-fw fa-users fa-fw"></i> ');
    });

    var $pageWrapperContainer = $('.page-wrapper .container-fluid');
    if ($pageWrapperContainer.find('.panel, .alert').length === 0) {
        $pageWrapperContainer
                .find('> div')
                .addClass('panel panel-default')
                .find('> div')
                .addClass('panel-body');
    }

    $('#addonsPage nav.navbar a').each(function () {
        var $this = $(this);
        if ($this.attr('href').indexOf('templates') > -1) {
            $this.prepend('<i class="fa fa-fw fa-paint-brush"></i> ');
        } else if ($this.attr('href').indexOf('modules') > -1) {
            $this.prepend('<i class="fa fa-fw fa-puzzle-piece"></i> ');
        } else if ($this.attr('href').indexOf('languages') > -1) {
            $this.prepend('<i class="fa fa-fw fa-language"></i> ');
        }
    });

    $('a > img').each(function () {
        var $this = $(this);
        if ($this.prop('src').indexOf('modify_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-pencil"></i>');
        } else if ($this.prop('src').indexOf('options_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-cog"></i>');
        } else if ($this.prop('src').indexOf('noclock_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-list-alt"></i>');
        } else if ($this.prop('src').indexOf('view_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-desktop"></i>');
        } else if ($this.prop('src').indexOf('up_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-arrow-circle-up"></i>');
        } else if ($this.prop('src').indexOf('down_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-arrow-circle-down"></i>');
        } else if ($this.prop('src').indexOf('delete_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-trash"></i>');
        } else if ($this.prop('src').indexOf('folder_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-folder-o"></i>');
        } else if ($this.prop('src').indexOf('add_child.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-files-o"></i>');
        }
    });

    var $welcomeMessage = $('#welcomeMessage'),
            welcomeMessageText = $welcomeMessage.text();

    welcomeMessageText = welcomeMessageText.replace('imBackend', 'im Backend');
    $welcomeMessage.text(welcomeMessageText);

    if (typeof CKEDITOR !== 'undefined') {
        CKEDITOR.on('instanceLoaded', function () {
            $.each(CKEDITOR.instances, function (index, instance) {
                instance.setUiColor('#ffffff');
                $(instance.element).css({
                    'border': 0,
                    'box-shadow': 'none'
                });
            });
        });
    }

    $('form[action="intro2.php"] table:first').addClass('table');

    if ($('.jcalendar').length) {
        $.insert(WB_URL + '/include/jscalendar/calendar-system.css');
    }

    if ($('.jsadmin').length) {
        $.insert(WB_URL + '/modules/jsadmin/backend.css');
    }
    $('#publishdate, #enddate').css({'width': 150, 'display': 'inline-block'});

});