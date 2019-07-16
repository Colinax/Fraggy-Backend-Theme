$(function () {

    $('a > img').each(function () {
        let $this = $(this);
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
            $this.parent().html('<i class="fa fa-fw fa-folder"></i>');
        } else if ($this.prop('src').indexOf('add_child.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-files"></i>');
        } else if ($this.prop('src').indexOf('restore_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-recycle"></i>');
        }
    });

    $('button:not(.sidenav-toggler), input[type="button"], input[type="reset"]')
        .addClass('btn btn-outline-light');

    $('button[type="submit"], input[type="submit"]')
        .addClass('btn btn-primary')
        .removeClass('btn-outline-light');

    $('input[type="text"], input[type="password"], textarea')
        .addClass('form-control');


    $('#addonsPage .nav-pills a').each(function () {
        let $this = $(this).addClass('nav-link');
        if ($this.attr('href').indexOf('templates') > -1) {
            $this.prepend('<i class="fa fa-fw fa-paint-brush"></i> ');
        } else if ($this.attr('href').indexOf('modules') > -1) {
            $this.prepend('<i class="fa fa-fw fa-puzzle-piece"></i> ');
        } else if ($this.attr('href').indexOf('languages') > -1) {
            $this.prepend('<i class="fa fa-fw fa-language"></i> ');
        }
    });

    $('.adminModuleWrapper').each(function () {
        let $card = $('<div />', {class: 'card'}),
            $cardHeader = $('<h4 />', {class: 'card-header'}),
            $cardBody = $('<div />', {class: 'card-body'}),
            $headingTitle = $('.content-body h4:first').hide(),
            adminToolTitle = $headingTitle.find('a').prop('title');

        $cardHeader.text(adminToolTitle);

        $cardBody.html($(this));

        $card.append($cardHeader, $cardBody);

        $headingTitle.remove();
        $('.content-body').prepend($card);
    });

    $('.content-body.content').each(function () {
        let $this = $(this);
        if ($this.find('.card, .alert').length === 0) {
            let $card = $('<div />', {class: 'card'}),
                $cardBody = $('<div />', {class: 'card-body'});

            $cardBody.html($this.children());
            $card.append($cardBody);

            $this.prepend($card);
        }
    });

    $('form[action="intro2.php"]').each(function () {
        let $this = $(this),
            $card = $('<div>', {'class': 'card'}),
            $cardBody = $('<div>', {'class': 'card-body'});

        $this.find('td.right').addClass('text-right');
        $this.find('td').css({'border': '0', 'padding': '0'});
        $this.find('table:first').addClass('table');

        $cardBody.append($this);

        $card.append($cardBody);

        $('.content-body').prepend($card);
    });

    if ($('.jcalendar').length) {
        $.insert(WB_URL + '/include/jscalendar/calendar-system.css');
    }

    if ($('.jsadmin').length) {
        $.insert(WB_URL + '/modules/jsadmin/backend.css');
    }

});

