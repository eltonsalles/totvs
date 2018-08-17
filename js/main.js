$(function () {
    const navBurgers = $('.navbar-burger');
    const menu = $('.navbar-menu');

    navBurgers.on('click', function () {
        navBurgers.toggleClass('is-active');
        menu.toggleClass('is-active');
    });

    $(window).on('resize', includeClass);
    includeClass();

    let navBarItems = $('.navbar-item');
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
            scrollTop: 1695
        }, 800);
    });

    navBarItems.eq(2).on('click', function (e) {
        e.preventDefault();

        navBurgers.removeClass('is-active');
        menu.removeClass('is-active');

        $('html, body').animate({
            scrollTop: 2485
        }, 800);
    });

    $('#call-print').on('click', function () {
        window.print();
    });

    if (screen.width >= 1024) {
        callOpenAllModal();
    }
});

function includeClass() {
    let callPanelIs5 = $('#call-panel-is-5');
    let callGraphicOpenIs7 = $('#call-graphic-open-is-7');
    let callGraphicComparationIs12 = $('#call-graphic-comparation-is-12');
    let callQualityServiceIs5 = $('#call-quality-service-is-5');
    let callQualityServiceIs7 = $('#call-quality-service-is-7');
    let callCalledClosedIs5 = $('#call-called-closed-is-5');
    let callCalledClosedIs7 = $('#call-called-closed-is-7');
    let callTop10Is12 = $('#call-top-10-is-12');
    let callClosedByTypeIs6 = $('#call-closed-by-type-is-6');
    let callClosedByProblemIs6 = $('#call-closed-by-problem-is-6');
    let callDistributionByDepartmentsIs6 = $('#call-distribution-by-departments-is-6');
    let callCalledClosureRegionIs6 = $('#call-called-closure-region-is-6');

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

function callOpenAllModal() {
    modal('#call-open-all-modal', 'Chamados Abertos', null)
}

function modal(idBtnOpen, title, table, pagination) {
    let btnOpen = document.querySelector(idBtnOpen);

    let modal = document.querySelector('#call-table');
    let btnClose = modal.querySelector('.call-modal-close');

    // modal.querySelector('.modal-card-title').textContent = title;
    // modal.querySelector('.table').textContent = table;
    // modal.querySelector('.pagination').textContent = pagination;

    btnOpen.addEventListener('click', function () {
        modal.classList.add('is-active');
    });

    btnClose.addEventListener('click', function () {
        modal.classList.remove('is-active');
    });
}
