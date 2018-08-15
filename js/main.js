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
        document.querySelector('#call-loading-charts').classList.add('call-loader-invisible');
    }
}

// var _0xab11=["\x44\x4F\x4D\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x6F\x61\x64\x65\x64","\x2E\x6E\x61\x76\x62\x61\x72\x2D\x62\x75\x72\x67\x65\x72","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x63\x6C\x69\x63\x6B","\x2E\x6E\x61\x76\x62\x61\x72\x2D\x6D\x65\x6E\x75","\x69\x73\x2D\x61\x63\x74\x69\x76\x65","\x74\x6F\x67\x67\x6C\x65","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x72\x65\x73\x69\x7A\x65","\x23\x63\x61\x6C\x6C\x2D\x70\x61\x6E\x65\x6C\x2D\x69\x73\x2D\x35","\x23\x63\x61\x6C\x6C\x2D\x67\x72\x61\x70\x68\x69\x63\x2D\x6F\x70\x65\x6E\x2D\x69\x73\x2D\x37","\x23\x63\x61\x6C\x6C\x2D\x67\x72\x61\x70\x68\x69\x63\x2D\x63\x6F\x6D\x70\x61\x72\x61\x74\x69\x6F\x6E\x2D\x69\x73\x2D\x31\x32","\x23\x63\x61\x6C\x6C\x2D\x71\x75\x61\x6C\x69\x74\x79\x2D\x73\x65\x72\x76\x69\x63\x65\x2D\x69\x73\x2D\x35","\x23\x63\x61\x6C\x6C\x2D\x71\x75\x61\x6C\x69\x74\x79\x2D\x73\x65\x72\x76\x69\x63\x65\x2D\x69\x73\x2D\x37","\x23\x63\x61\x6C\x6C\x2D\x63\x61\x6C\x6C\x65\x64\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x69\x73\x2D\x35","\x23\x63\x61\x6C\x6C\x2D\x63\x61\x6C\x6C\x65\x64\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x69\x73\x2D\x37","\x23\x63\x61\x6C\x6C\x2D\x74\x6F\x70\x2D\x31\x30\x2D\x69\x73\x2D\x31\x32","\x23\x63\x61\x6C\x6C\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x62\x79\x2D\x74\x79\x70\x65\x2D\x69\x73\x2D\x36","\x23\x63\x61\x6C\x6C\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x62\x79\x2D\x70\x72\x6F\x62\x6C\x65\x6D\x2D\x69\x73\x2D\x36","\x23\x63\x61\x6C\x6C\x2D\x64\x69\x73\x74\x72\x69\x62\x75\x74\x69\x6F\x6E\x2D\x62\x79\x2D\x64\x65\x70\x61\x72\x74\x6D\x65\x6E\x74\x73\x2D\x69\x73\x2D\x36","\x23\x63\x61\x6C\x6C\x2D\x63\x61\x6C\x6C\x65\x64\x2D\x63\x6C\x6F\x73\x75\x72\x65\x2D\x72\x65\x67\x69\x6F\x6E\x2D\x69\x73\x2D\x36","\x77\x69\x64\x74\x68","\x69\x73\x2D\x35","\x72\x65\x6D\x6F\x76\x65","\x69\x73\x2D\x37","\x69\x73\x2D\x31\x32","\x69\x73\x2D\x36","\x61\x64\x64"];document[_0xab11[8]](_0xab11[0],()=>{const _0x37e0x1=document[_0xab11[2]](_0xab11[1]);_0x37e0x1[_0xab11[8]](_0xab11[3],()=>{let _0x37e0x2=document[_0xab11[2]](_0xab11[4]);_0x37e0x1[_0xab11[7]][_0xab11[6]](_0xab11[5]);_0x37e0x2[_0xab11[7]][_0xab11[6]](_0xab11[5])});window[_0xab11[8]](_0xab11[9],includeClass);includeClass()});function includeClass(){let _0x37e0x4=document[_0xab11[2]](_0xab11[10]);let _0x37e0x5=document[_0xab11[2]](_0xab11[11]);let _0x37e0x6=document[_0xab11[2]](_0xab11[12]);let _0x37e0x7=document[_0xab11[2]](_0xab11[13]);let _0x37e0x8=document[_0xab11[2]](_0xab11[14]);let _0x37e0x9=document[_0xab11[2]](_0xab11[15]);let _0x37e0xa=document[_0xab11[2]](_0xab11[16]);let _0x37e0xb=document[_0xab11[2]](_0xab11[17]);let _0x37e0xc=document[_0xab11[2]](_0xab11[18]);let _0x37e0xd=document[_0xab11[2]](_0xab11[19]);let _0x37e0xe=document[_0xab11[2]](_0xab11[20]);let _0x37e0xf=document[_0xab11[2]](_0xab11[21]);if(screen[_0xab11[22]]< 1024){_0x37e0x4[_0xab11[7]][_0xab11[24]](_0xab11[23]);_0x37e0x5[_0xab11[7]][_0xab11[24]](_0xab11[25]);_0x37e0x6[_0xab11[7]][_0xab11[24]](_0xab11[26]);_0x37e0x7[_0xab11[7]][_0xab11[24]](_0xab11[23]);_0x37e0x8[_0xab11[7]][_0xab11[24]](_0xab11[25]);_0x37e0x9[_0xab11[7]][_0xab11[24]](_0xab11[23]);_0x37e0xa[_0xab11[7]][_0xab11[24]](_0xab11[25]);_0x37e0xb[_0xab11[7]][_0xab11[24]](_0xab11[26]);_0x37e0xc[_0xab11[7]][_0xab11[24]](_0xab11[27]);_0x37e0xd[_0xab11[7]][_0xab11[24]](_0xab11[27]);_0x37e0xe[_0xab11[7]][_0xab11[24]](_0xab11[27]);_0x37e0xf[_0xab11[7]][_0xab11[24]](_0xab11[27])}else {_0x37e0x4[_0xab11[7]][_0xab11[28]](_0xab11[23]);_0x37e0x5[_0xab11[7]][_0xab11[28]](_0xab11[25]);_0x37e0x6[_0xab11[7]][_0xab11[28]](_0xab11[26]);_0x37e0x7[_0xab11[7]][_0xab11[28]](_0xab11[23]);_0x37e0x8[_0xab11[7]][_0xab11[28]](_0xab11[25]);_0x37e0x9[_0xab11[7]][_0xab11[28]](_0xab11[23]);_0x37e0xa[_0xab11[7]][_0xab11[28]](_0xab11[25]);_0x37e0xb[_0xab11[7]][_0xab11[28]](_0xab11[26]);_0x37e0xc[_0xab11[7]][_0xab11[28]](_0xab11[27]);_0x37e0xd[_0xab11[7]][_0xab11[28]](_0xab11[27]);_0x37e0xe[_0xab11[7]][_0xab11[28]](_0xab11[27]);_0x37e0xf[_0xab11[7]][_0xab11[28]](_0xab11[27])}}