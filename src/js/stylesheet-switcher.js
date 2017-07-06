/*!
 * Fraggy Backend Theme v1.7.0
 * Jonathan Nessier, Neoflow (https://neoflow.ch) | Licensed under MIT
 * Responsive and Bootstrap based backend theme for WBCE
 */

// Initialize stylesheet switcher
$(function () {
    var $switchableLink = $('#switchable'),
            $stylesheetSwitchBtn = $('#stylesheet-switcher a');

    $stylesheetSwitchBtn.on('click', function (e) {
        e.preventDefault();

        var stylesheetUrl = $(this).blur().attr('href');

        $('body').fadeTo(400, 0, function () {
            var $body = $(this),
                    $newSwitchableLink = $('<link>', {
                        'rel': 'stylesheet',
                        'type': 'text/css',
                        'href': stylesheetUrl
                    });

            localStorage.setItem('stylesheetUrl', stylesheetUrl);

            // Reload iframes
            $('iframe').each(function () {
                var $this = $(this);
                if ($this.attr('src').length > 0) {
                    this.contentWindow.location.reload();
                }
            });

            $switchableLink.after($newSwitchableLink);

            $newSwitchableLink.load(function () {
                $switchableLink.remove();
                $switchableLink = $newSwitchableLink;
                $body.fadeTo(400, 1);
            });
        });
    });
});

