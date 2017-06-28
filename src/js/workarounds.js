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

        $sidebarNav.find('li.dashboard > a > .icon').append('<i class="fa fa-fw fa-tachometer fa-fw"></i> ');
        $sidebarNav.find('li.preferences > a > .icon').append('<i class="fa fa-fw fa-cog fa-fw"></i> ');
        $sidebarNav.find('li.pages > a > .icon').append('<i class="fa fa-fw fa-files-o fa-fw"></i> ');
        $sidebarNav.find('li.media > a > .icon').append('<i class="fa fa-fw fa-picture-o fa-fw"></i> ');
        $sidebarNav.find('li.addons > a > .icon').append('<i class="fa fa-fw fa-th"></i> ');
        $sidebarNav.find('li.settings > a > .icon').append('<i class="fa fa-fw fa-cogs fa-fw"></i> ');
        $sidebarNav.find('li.admintools > a > .icon').append('<i class="fa fa-fw fa-cubes fa-fw"></i> ');
        $sidebarNav.find('li.access > a > .icon').append('<i class="fa fa-fw fa-users fa-fw"></i> ');
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
        } else if ($this.prop('src').indexOf('restore_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-recycle"></i>');
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