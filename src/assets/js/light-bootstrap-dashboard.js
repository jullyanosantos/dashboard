/*!

 =========================================================
 * Light Bootstrap Dashboard - v1.4.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2017 
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;
var searchVisible = 0;
var transparent = true;
var transparentDemo = true;
var fixedTop = false;
var navbar_initialized = false;

var mobile_menu_visible = 0, 
    mobile_menu_initialized = false, 
    toggle_initialized = false,
    bootstrap_nav_initialized = false, 
    $sidebar, 
    isWindows;

$(document).ready(function () {
    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    lbd.checkSidebarImage();
    if (window_width <= 991) {
        lbd.initRightMenu();
    }
    lbd.initMinimizeSidebar();
    // Init navigation toggle for small screens
    // lbd.initRightMenu();

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    $('.form-control').on("focus", function () {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function () {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Fixes sub-nav not working as expected on IOS
    $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
});

$(document).on('click', '.navbar-toggle', function () {
    $toggle = $(this);

    if (lbd.misc.navbar_menu_visible == 1) {
        $('body').removeClass('nav-open');
        lbd.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function () {
            $toggle.removeClass('toggled');
        }, 550);
    } else {
        setTimeout(function () {
            $toggle.addClass('toggled');
        }, 580);
        div = '<div id="bodyClick"></div>';
        $(div).appendTo('body').click(function () {
            $('body').removeClass('nav-open');
            lbd.misc.navbar_menu_visible = 0;
            setTimeout(function () {
                $toggle.removeClass('toggled');
                $('#bodyClick').remove();
            }, 550);
        });

        $('body').addClass('nav-open');
        lbd.misc.navbar_menu_visible = 1;
    }
});

$(window).on('resize', function () {
    if (navbar_initialized) {
        lbd.initRightMenu();
        navbar_initialized = true;
    }
});

lbd = {
    misc: {
        navbar_menu_visible: 0
    },

checkSidebarImage: function() {
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');
        if (image_src !== undefined) {
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        } else if (mobile_menu_initialized == true) {
            $sidebar_wrapper.find('.navbar-form').remove();
            $sidebar_wrapper.find('.nav-mobile-menu').remove();
            mobile_menu_initialized = false;
        }
    },

    initMinimizeSidebar: function () {
        $('.sidebar .collapse').on('in.bs.collapse', function () {
            if ($(window).width() > 991) {
                if (lbd.misc.sidebar_mini_active == true) {
                    return false;
                } else {
                    return true;
                }
            }
        });

        $(document).on('click', '#minimizeSidebar', function () {

            debugger
            var $btn = $(this);
            if (lbd.misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                lbd.misc.sidebar_mini_active = false;
                if (isWindows) {
                    $('.sidebar .sidebar-wrapper').perfectScrollbar();
                }
            } else {
                $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse', function () {
                    $(this).css('height', 'auto');
                });
                if (isWindows) {
                    $('.sidebar .sidebar-wrapper').perfectScrollbar('destroy');
                }
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    lbd.misc.sidebar_mini_active = true;
                }, 300);
            }
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    },
    initRightMenu: function() {
        $sidebar_wrapper = $('.sidebar-wrapper');
        if (!mobile_menu_initialized) {
            $navbar = $('nav').find('.navbar-collapse').first().clone(true);
            nav_content = '';
            mobile_menu_content = '';
            $navbar.children('ul').each(function() {
                content_buff = $(this).html();
                nav_content = nav_content + content_buff;
            });
            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';
            $sidebar_nav = $sidebar_wrapper.find(' > .nav');
            $nav_content = $(nav_content);
            $nav_content.insertBefore($sidebar_nav);
            $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
                event.stopPropagation();
            });
            mobile_menu_initialized = true;
        } else {
            console.log('window with:' + $(window).width());
            if ($(window).width() > 991) {
                $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();
                mobile_menu_initialized = false;
            }
        }
        if (!toggle_initialized) {
            $toggle = $('.navbar-toggler');
            $toggle.click(function() {
                if (mobile_menu_visible == 1) {
                    $('body').removeClass('nav-open');
                    $('.close-layer').remove();
                    setTimeout(function() {
                        $toggle.removeClass('toggled');
                    }, 400);
                    mobile_menu_visible = 0;
                } else {
                    setTimeout(function() {
                        $toggle.addClass('toggled');
                    }, 430);
                    main_panel_height = $('.main-panel')[0].scrollHeight;
                    $layer = $('<div class="close-layer"></div>');
                    $layer.css('height', main_panel_height + 'px');
                    $layer.appendTo(".main-panel");
                    setTimeout(function() {
                        $layer.addClass('visible');
                    }, 100);
                    $layer.click(function() {
                        $('body').removeClass('nav-open');
                        mobile_menu_visible = 0;
                        $layer.removeClass('visible');
                        setTimeout(function() {
                            $layer.remove();
                            $toggle.removeClass('toggled');
                        }, 400);
                    });
                    $('body').addClass('nav-open');
                    mobile_menu_visible = 1;
                }
            });
            toggle_initialized = true;
        }
    }
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};
