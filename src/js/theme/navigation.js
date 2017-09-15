// Navigation
$(function () {

    // Sidenav minimize/expand behaviour
    var $sideNavigation = $('#sideNavigation')
            .on('minimized', function (e) {
                localStorage['side-navigation'] = 'minimized';
            })
            .on('expanded', function (e) {
                localStorage['side-navigation'] = 'expanded';
            })
            .on('expand minimize', function (e) {
                $sideNavigation.removeScrollbar();
            })
            .on('expanded minimized', function (e) {
                setTimeout(function () {
                    $sideNavigation.addScrollbar();
                }, 200);
            });

    // Toggle minimize/expand function
    $sideNavigation.toggle = function () {
        if ($('body').hasClass('side-navigation-minimized')) {
            $sideNavigation.expand();
        } else {
            $sideNavigation.minimize();
        }
    };

    // Minimize function
    $sideNavigation.minimize = function () {
        $sideNavigation.trigger('minimize');
        $('body').addClass('side-navigation-minimized');
        $sideNavigation.trigger('minimized');
    };

    // Expand function
    $sideNavigation.expand = function () {
        $sideNavigation.trigger('expand');
        $('body').removeClass('side-navigation-minimized');
        $sideNavigation.trigger('expanded');
    };

    // Add scrollbar function
    $sideNavigation.addScrollbar = function () {
        $sideNavigation.niceScroll({
            zindex: 99999999,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: '#5f5f6c',
            cursoropacitymin: 0.4,
            autohidemode: 'leave',
            cursorwidth: '6px'
        });
    };

    // Remove scrollbar function
    $sideNavigation.removeScrollbar = function () {
        $sideNavigation.getNiceScroll().remove();
    };

    // Set toggle button for side navigation
    $('#sidenavToggleLeftRightBtn').on('click', function (e) {
        e.preventDefault();
        $sideNavigation.toggle(false);
    });

    var $navbarSidenav = $sideNavigation.find('.navbar-sidenav');

    // Workaround for fixing WBCE output to bootstrap valid output
    var $activeNavItem = $navbarSidenav.find('li.nav-item.current');
    if ($activeNavItem.length === 0) {
        $navbarSidenav.find('li.dashboard').addClass('active');
    } else {
        $activeNavItem.removeClass('current').addClass('active');
    }
    $navbarSidenav.find('li.item-preferences .nav-link-icon').append('<i class="fa fa-fw fa-cog"></i> ');
    $navbarSidenav.find('li.item-pages .nav-link-icon').append('<i class="fa fa-fw fa-files-o"></i> ');
    $navbarSidenav.find('li.item-media .nav-link-icon').append('<i class="fa fa-fw fa-picture-o"></i> ');
    $navbarSidenav.find('li.item-addons .nav-link-icon').append('<i class="fa fa-fw fa-th"></i> ');
    $navbarSidenav.find('li.item-settings .nav-link-icon').append('<i class="fa fa-fw fa-cogs"></i> ');
    $navbarSidenav.find('li.item-admintools .nav-link-icon').append('<i class="fa fa-fw fa-cubes"></i> ');
    $navbarSidenav.find('li.item-access .nav-link-icon').append('<i class="fa fa-fw fa-users"></i> ');

});