document.addEventListener('DOMContentLoaded', () => {
    const navBurgers = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    navBurgers.addEventListener('click', () => {
        navBurgers.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    window.addEventListener('resize', includeClass);
    includeClass();

    let navBarItems = document.querySelectorAll('.navbar-item');
    navBarItems.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            navBurgers.classList.remove('is-active');
            menu.classList.remove('is-active');

            switch (index) {
                case 0:
                    setTimeout(function () {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }, 100);
                    break;

                case 1:
                     setTimeout(function () {
                        window.scroll({ top: 2386, left: 0, behavior: "smooth" });
                    }, 100);
                    break;

                case 2:
                    setTimeout(function () {
                        window.scroll({ top: 3829, left: 0, behavior: "smooth" });
                    }, 100);
                    break;
            }
        });
    });

    document.querySelector('#call-print').addEventListener('click', function () {
        window.print();
    });

    if (screen.width >= 1024) {
        callOpenAllModal();
    }
});

function includeClass() {
    let callPanelIs5 = document.querySelector('#call-panel-is-5');
    let callGraphicOpenIs7 = document.querySelector('#call-graphic-open-is-7');
    let callGraphicComparationIs12 = document.querySelector('#call-graphic-comparation-is-12');
    let callQualityServiceIs5 = document.querySelector('#call-quality-service-is-5');
    let callQualityServiceIs7 = document.querySelector('#call-quality-service-is-7');
    let callCalledClosedIs5 = document.querySelector('#call-called-closed-is-5');
    let callCalledClosedIs7 = document.querySelector('#call-called-closed-is-7');
    let callTop10Is12 = document.querySelector('#call-top-10-is-12');
    let callClosedByTypeIs6 = document.querySelector('#call-closed-by-type-is-6');
    let callClosedByProblemIs6 = document.querySelector('#call-closed-by-problem-is-6');
    let callDistributionByDepartmentsIs6 = document.querySelector('#call-distribution-by-departments-is-6');
    let callCalledClosureRegionIs6 = document.querySelector('#call-called-closure-region-is-6');
    let callMonth = document.querySelector('#call-month');

    if (screen.width < 1024) {
        callPanelIs5.classList.remove('is-5');
        callGraphicOpenIs7.classList.remove('is-7');
        callGraphicComparationIs12.classList.remove('is-12');
        callQualityServiceIs5.classList.remove('is-5');
        callQualityServiceIs7.classList.remove('is-7');
        callCalledClosedIs5.classList.remove('is-5');
        callCalledClosedIs7.classList.remove('is-7');
        callTop10Is12.classList.remove('is-12');
        callClosedByTypeIs6.classList.remove('is-6');
        callClosedByProblemIs6.classList.remove('is-6');
        callDistributionByDepartmentsIs6.classList.remove('is-6');
        callCalledClosureRegionIs6.classList.remove('is-6');
        callMonth.classList.add('is-large');
    } else {
        callPanelIs5.classList.add('is-5');
        callGraphicOpenIs7.classList.add('is-7');
        callGraphicComparationIs12.classList.add('is-12');
        callQualityServiceIs5.classList.add('is-5');
        callQualityServiceIs7.classList.add('is-7');
        callCalledClosedIs5.classList.add('is-5');
        callCalledClosedIs7.classList.add('is-7');
        callTop10Is12.classList.add('is-12');
        callClosedByTypeIs6.classList.add('is-6');
        callClosedByProblemIs6.classList.add('is-6');
        callDistributionByDepartmentsIs6.classList.add('is-6');
        callCalledClosureRegionIs6.classList.add('is-6');
        callMonth.classList.remove('is-large');
    }
}

function countDrawCharts() {
    numberDrawCharts++;
    if (numberDrawCharts >= 12) {
        document.querySelector('#call-loading-charts').classList.remove('is-active');
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
