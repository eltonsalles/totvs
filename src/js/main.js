$(function () {
    var navBurgers = $('.navbar-burger');
    var menu = $('.navbar-menu');

    navBurgers.on('click', function () {
        navBurgers.toggleClass('is-active');
        menu.toggleClass('is-active');
    });

    $(window).on('resize', includeClass);
    includeClass();

    var navBarItems = $('.navbar-item');
    navBarItems.eq(0).on('click', function (e) {
        e.preventDefault();

        navBurgers.removeClass('is-active');
        menu.removeClass('is-active');

        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    navBarItems.eq(1).on('click', function (e) {
        e.preventDefault();

        navBurgers.removeClass('is-active');
        menu.removeClass('is-active');

        $('html, body').animate({
            scrollTop: $('#call-quality').offset().top - 100
        }, 800);
    });

    navBarItems.eq(2).on('click', function (e) {
        e.preventDefault();

        navBurgers.removeClass('is-active');
        menu.removeClass('is-active');

        $('html, body').animate({
            scrollTop: $('#call-called').offset().top - 100
        }, 800);
    });

    $('#call-print').on('click', function () {
        window.print();
    });
});

function includeClass() {
    var callPanelIs5 = $('#call-panel-is-5');
    var callGraphicOpenIs7 = $('#call-graphic-open-is-7');
    var callGraphicComparationIs12 = $('#call-graphic-comparation-is-12');
    var callQualityServiceIs5 = $('#call-quality-service-is-5');
    var callQualityServiceIs7 = $('#call-quality-service-is-7');
    var callCalledClosedIs5 = $('#call-called-closed-is-5');
    var callCalledClosedIs7 = $('#call-called-closed-is-7');
    var callTop10Is12 = $('#call-top-10-is-12');
    var callClosedByTypeIs6 = $('#call-closed-by-type-is-6');
    var callClosedByProblemIs6 = $('#call-closed-by-problem-is-6');
    var callDistributionByDepartmentsIs6 = $('#call-distribution-by-departments-is-6');
    var callCalledClosureRegionIs6 = $('#call-called-closure-region-is-6');

    if (screen.width < 1024) {
        callPanelIs5.removeClass('is-5');
        callGraphicOpenIs7.removeClass('is-7');
        callGraphicComparationIs12.removeClass('is-12');
        callQualityServiceIs5.removeClass('is-5');
        callQualityServiceIs7.removeClass('is-7');
        callCalledClosedIs5.removeClass('is-5');
        callCalledClosedIs7.removeClass('is-7');
        callTop10Is12.removeClass('is-12');
        callClosedByTypeIs6.removeClass('is-6');
        callClosedByProblemIs6.removeClass('is-6');
        callDistributionByDepartmentsIs6.removeClass('is-6');
        callCalledClosureRegionIs6.removeClass('is-6');
    } else {
        callPanelIs5.addClass('is-5');
        callGraphicOpenIs7.addClass('is-7');
        callGraphicComparationIs12.addClass('is-12');
        callQualityServiceIs5.addClass('is-5');
        callQualityServiceIs7.addClass('is-7');
        callCalledClosedIs5.addClass('is-5');
        callCalledClosedIs7.addClass('is-7');
        callTop10Is12.addClass('is-12');
        callClosedByTypeIs6.addClass('is-6');
        callClosedByProblemIs6.addClass('is-6');
        callDistributionByDepartmentsIs6.addClass('is-6');
        callCalledClosureRegionIs6.addClass('is-6');
    }
}

function countDrawCharts() {
    numberDrawCharts++;
    if (numberDrawCharts >= 12) {
        $('#call-loading-charts').removeClass('is-active');
    }
}
