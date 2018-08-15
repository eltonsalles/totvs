let numberDrawCharts = 0;

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(callOpen);
google.charts.setOnLoadCallback(callComparationMonths);
google.charts.setOnLoadCallback(callByDay);
google.charts.setOnLoadCallback(satisfactionMonths);
google.charts.setOnLoadCallback(satisfactionMonthsInsideSla);
google.charts.setOnLoadCallback(callTop10);
google.charts.setOnLoadCallback(drawingsClosedByTypeProblem);
google.charts.setOnLoadCallback(drawingsClosedByProblem);
google.charts.setOnLoadCallback(distributionByDepartments);

function callOpen() {
    let dataJson = getDataJson("json/call-open.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        title: 'Nº de Chamados Abertos',
        titleTextStyle: {
            color: '#015374',
            fontSize: 12,
        },
        chartArea: {
            left: 20,
            top: 30,
            width: '100%'
        },
        legend: 'none',
        bar: {groupWidth: '75%'},
        isStacked: true,
        colors: ['#AA4643', '#015374'],
        hAxis: {
            textStyle: {
                color: '#015374',
                fontSize: 10,
                bold: true
            }
        },
        vAxis: {
            textPosition: 'none'
        },
        annotations: {
            textStyle: {
                fontSize: 18,
                bold: true
            }
        }
    };

    let chart = new google.visualization.ColumnChart(document.querySelector('#call-graphic-open'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    google.visualization.events.addListener(chart, 'click', function (targetID) {
        console.log(targetID);
    });
    chart.draw(data, options);

    let title = document.querySelector('#call-graphic-open > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '730');
    } else {
        title.setAttribute('x', '410');
    }
}

function callComparationMonths() {
    let dataJson = getDataJson("json/call-comparation-months.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        chartArea: {
            left: 20,
            top: 30,
            width: '100%'
        },
        legend: 'none',
        bar: {groupWidth: '75%'},
        isStacked: true,
        colors: ['#AA4643', '#015374'],
        hAxis: {
            textStyle: {
                color: '#015374',
                fontSize: 10,
                bold: true
            }
        },
        vAxis: {
            textPosition: 'none'
        },
        annotations: {
            textStyle: {
                fontSize: 18,
                bold: true
            }
        }
    };

    let chart = new google.visualization.ColumnChart(document.querySelector('#call-graphic-comparation'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function callByDay() {
    let dataJson = getDataJson("json/call-by-day.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        chartArea: {
            left: 20,
            top: 30,
            width: '100%'
        },
        legend: 'none',
        bar: {groupWidth: '75%'},
        colors: ['#015374', '#AA4643'],
        hAxis: {
            textStyle: {
                color: '#015374',
                fontSize: 14,
                bold: true
            }
        },
        vAxis: {
            textPosition: 'none'
        }
    };

    let chart = new google.visualization.ColumnChart(document.querySelector('#call-graphic-by-day'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function satisfactionMonths() {
    let dataJson = getDataJson("json/satisfaction-months.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        title: 'Comparação com os meses anteriores',
        titleTextStyle: {
            color: '#015374',
            fontSize: 14,
            bold: true
        },
        legend: 'none',
        hAxis: {
            textStyle: {
                color: '#015374',
                fontSize: 14,
                bold: true
            }
        },
        vAxis: {
            format: '##,##%',
            gridLines: {
                count: 5
            }
        },
        pointSize: 10,
        lineWidth: 5
    };

    let chart = new google.visualization.LineChart(document.querySelector('#call-level-of-satisfaction-months'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);

    let title = document
        .querySelector('#call-level-of-satisfaction-months > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '525');
    } else {
        title.setAttribute('x', '225');
    }
}

function satisfactionMonthsInsideSla() {
    let dataJson = getDataJson("json/satisfaction-months-inside-sla.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        title: 'Comparação com os meses anteriores',
        titleTextStyle: {
            color: '#015374',
            fontSize: 14,
            bold: true
        },
        legend: 'none',
        hAxis: {
            textStyle: {
                color: '#015374',
                fontSize: 14,
                bold: true
            }
        },
        vAxis: {
            format: '##,##%',
            gridLines: {
                count: 5
            }
        },
        pointSize: 10,
        lineWidth: 5
    };

    let chart = new google.visualization.LineChart(document.querySelector('#call-called-closed-months'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);

    let title = document
        .querySelector('#call-called-closed-months > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '525');
    } else {
        title.setAttribute('x', '225');
    }
}

function callTop10() {
    let dataJson = getDataJson("json/call-top-10.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        title: 'Nº de Chamados',
        titleTextStyle: {
            color: '#015374',
            fontSize: 14,
            bold: true
        },
        chartArea: {
            left: 20,
            top: 30,
            width: '100%'
        },
        legend: 'none',
        bar: {groupWidth: '75%'},
        isStacked: true,
        colors: ['#AA4643', '#015374'],
        hAxis: {
            textStyle: {
                color: '#015374',
                fontSize: 10,
                bold: true
            }
        },
        vAxis: {
            textPosition: 'none'
        },
        annotations: {
            textStyle: {
                fontSize: 18,
                bold: true
            }
        }
    };

    let chart = new google.visualization.ColumnChart(document.querySelector('#call-top-10'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);

    let title = document.querySelector('#call-top-10 > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '760');
    } else {
        title.setAttribute('x', '860');
    }
}

function drawingsClosedByTypeProblem() {
    let dataJson = getDataJson("json/call-closed-by-type.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        is3D: true,
        pieSliceText: 'percent',
        chartArea: {
            width: '95%'
        }
    };

    data.sort([{
        column: 1,
        desc: true
    }]);

    let chart = new google.visualization.PieChart(document.querySelector('#call-closed-by-type'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function drawingsClosedByProblem() {
    let dataJson = getDataJson("json/call-closed-by-problem.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        is3D: true,
        pieSliceText: 'percent',
        chartArea: {
            width: '95%'
        }
    };

    data.sort([{
        column: 1,
        desc: true
    }]);

    let chart = new google.visualization.PieChart(document.querySelector('#call-closed-by-problem'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function distributionByDepartments() {
    let dataJson = getDataJson("json/call-closed-by-type.json");
    let data = new google.visualization.DataTable(dataJson);

    let options = {
        is3D: true,
        pieSliceText: 'percent',
        chartArea: {
            width: '95%'
        }
    };

    data.sort([{
        column: 1,
        desc: true
    }]);

    let chart = new google.visualization.PieChart(document.querySelector('#call-distribution-by-departments'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function getDataJson(url) {
    let dataJson = [];
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);
    xhr.send(null);

    if (xhr.status === 200) {
        dataJson = xhr.responseText;
    }

    return dataJson;
}

// var _0xfc92=["\x63\x75\x72\x72\x65\x6E\x74","\x63\x6F\x72\x65\x63\x68\x61\x72\x74","\x6C\x69\x6E\x65","\x6C\x6F\x61\x64","\x63\x68\x61\x72\x74\x73","\x73\x65\x74\x4F\x6E\x4C\x6F\x61\x64\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x6A\x73\x6F\x6E\x2F\x63\x61\x6C\x6C\x2D\x6F\x70\x65\x6E\x2E\x6A\x73\x6F\x6E","\x76\x69\x73\x75\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E","\x4E\xBA\x20\x64\x65\x20\x43\x68\x61\x6D\x61\x64\x6F\x73\x20\x41\x62\x65\x72\x74\x6F\x73","\x23\x30\x31\x35\x33\x37\x34","\x31\x30\x30\x25","\x6E\x6F\x6E\x65","\x37\x35\x25","\x23\x41\x41\x34\x36\x34\x33","\x23\x63\x61\x6C\x6C\x2D\x67\x72\x61\x70\x68\x69\x63\x2D\x6F\x70\x65\x6E","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x72\x65\x61\x64\x79","\x61\x64\x64\x4C\x69\x73\x74\x65\x6E\x65\x72","\x65\x76\x65\x6E\x74\x73","\x63\x6C\x69\x63\x6B","\x6C\x6F\x67","\x64\x72\x61\x77","\x23\x63\x61\x6C\x6C\x2D\x67\x72\x61\x70\x68\x69\x63\x2D\x6F\x70\x65\x6E\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x73\x76\x67\x20\x3E\x20\x67\x3A\x6E\x74\x68\x2D\x6F\x66\x2D\x74\x79\x70\x65\x28\x31\x29\x20\x3E\x20\x74\x65\x78\x74","\x77\x69\x64\x74\x68","\x78","\x37\x33\x30","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x34\x31\x30","\x6A\x73\x6F\x6E\x2F\x63\x61\x6C\x6C\x2D\x63\x6F\x6D\x70\x61\x72\x61\x74\x69\x6F\x6E\x2D\x6D\x6F\x6E\x74\x68\x73\x2E\x6A\x73\x6F\x6E","\x23\x63\x61\x6C\x6C\x2D\x67\x72\x61\x70\x68\x69\x63\x2D\x63\x6F\x6D\x70\x61\x72\x61\x74\x69\x6F\x6E","\x6A\x73\x6F\x6E\x2F\x63\x61\x6C\x6C\x2D\x62\x79\x2D\x64\x61\x79\x2E\x6A\x73\x6F\x6E","\x23\x63\x61\x6C\x6C\x2D\x67\x72\x61\x70\x68\x69\x63\x2D\x62\x79\x2D\x64\x61\x79","\x6A\x73\x6F\x6E\x2F\x73\x61\x74\x69\x73\x66\x61\x63\x74\x69\x6F\x6E\x2D\x6D\x6F\x6E\x74\x68\x73\x2E\x6A\x73\x6F\x6E","\x43\x6F\x6D\x70\x61\x72\x61\xE7\xE3\x6F\x20\x63\x6F\x6D\x20\x6F\x73\x20\x6D\x65\x73\x65\x73\x20\x61\x6E\x74\x65\x72\x69\x6F\x72\x65\x73","\x23\x23\x2C\x23\x23\x25","\x23\x63\x61\x6C\x6C\x2D\x6C\x65\x76\x65\x6C\x2D\x6F\x66\x2D\x73\x61\x74\x69\x73\x66\x61\x63\x74\x69\x6F\x6E\x2D\x6D\x6F\x6E\x74\x68\x73","\x23\x63\x61\x6C\x6C\x2D\x6C\x65\x76\x65\x6C\x2D\x6F\x66\x2D\x73\x61\x74\x69\x73\x66\x61\x63\x74\x69\x6F\x6E\x2D\x6D\x6F\x6E\x74\x68\x73\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x73\x76\x67\x20\x3E\x20\x67\x3A\x6E\x74\x68\x2D\x6F\x66\x2D\x74\x79\x70\x65\x28\x31\x29\x20\x3E\x20\x74\x65\x78\x74","\x35\x32\x35","\x32\x32\x35","\x6A\x73\x6F\x6E\x2F\x73\x61\x74\x69\x73\x66\x61\x63\x74\x69\x6F\x6E\x2D\x6D\x6F\x6E\x74\x68\x73\x2D\x69\x6E\x73\x69\x64\x65\x2D\x73\x6C\x61\x2E\x6A\x73\x6F\x6E","\x23\x63\x61\x6C\x6C\x2D\x63\x61\x6C\x6C\x65\x64\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x6D\x6F\x6E\x74\x68\x73","\x23\x63\x61\x6C\x6C\x2D\x63\x61\x6C\x6C\x65\x64\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x6D\x6F\x6E\x74\x68\x73\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x73\x76\x67\x20\x3E\x20\x67\x3A\x6E\x74\x68\x2D\x6F\x66\x2D\x74\x79\x70\x65\x28\x31\x29\x20\x3E\x20\x74\x65\x78\x74","\x6A\x73\x6F\x6E\x2F\x63\x61\x6C\x6C\x2D\x74\x6F\x70\x2D\x31\x30\x2E\x6A\x73\x6F\x6E","\x4E\xBA\x20\x64\x65\x20\x43\x68\x61\x6D\x61\x64\x6F\x73","\x23\x63\x61\x6C\x6C\x2D\x74\x6F\x70\x2D\x31\x30","\x23\x63\x61\x6C\x6C\x2D\x74\x6F\x70\x2D\x31\x30\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x64\x69\x76\x20\x3E\x20\x73\x76\x67\x20\x3E\x20\x67\x3A\x6E\x74\x68\x2D\x6F\x66\x2D\x74\x79\x70\x65\x28\x31\x29\x20\x3E\x20\x74\x65\x78\x74","\x37\x36\x30","\x38\x36\x30","\x6A\x73\x6F\x6E\x2F\x63\x61\x6C\x6C\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x62\x79\x2D\x74\x79\x70\x65\x2E\x6A\x73\x6F\x6E","\x70\x65\x72\x63\x65\x6E\x74","\x39\x35\x25","\x73\x6F\x72\x74","\x23\x63\x61\x6C\x6C\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x62\x79\x2D\x74\x79\x70\x65","\x6A\x73\x6F\x6E\x2F\x63\x61\x6C\x6C\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x62\x79\x2D\x70\x72\x6F\x62\x6C\x65\x6D\x2E\x6A\x73\x6F\x6E","\x23\x63\x61\x6C\x6C\x2D\x63\x6C\x6F\x73\x65\x64\x2D\x62\x79\x2D\x70\x72\x6F\x62\x6C\x65\x6D","\x23\x63\x61\x6C\x6C\x2D\x64\x69\x73\x74\x72\x69\x62\x75\x74\x69\x6F\x6E\x2D\x62\x79\x2D\x64\x65\x70\x61\x72\x74\x6D\x65\x6E\x74\x73","\x47\x45\x54","\x6F\x70\x65\x6E","\x73\x65\x6E\x64","\x73\x74\x61\x74\x75\x73","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74"];let numberDrawCharts=0;google[_0xfc92[4]][_0xfc92[3]](_0xfc92[0],{packages:[_0xfc92[1],_0xfc92[2]]});google[_0xfc92[4]][_0xfc92[5]](callOpen);google[_0xfc92[4]][_0xfc92[5]](callComparationMonths);google[_0xfc92[4]][_0xfc92[5]](callByDay);google[_0xfc92[4]][_0xfc92[5]](satisfactionMonths);google[_0xfc92[4]][_0xfc92[5]](satisfactionMonthsInsideSla);google[_0xfc92[4]][_0xfc92[5]](callTop10);google[_0xfc92[4]][_0xfc92[5]](drawingsClosedByTypeProblem);google[_0xfc92[4]][_0xfc92[5]](drawingsClosedByProblem);google[_0xfc92[4]][_0xfc92[5]](distributionByDepartments);function callOpen(){let _0xb754x3=getDataJson(_0xfc92[6]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={title:_0xfc92[8],titleTextStyle:{color:_0xfc92[9],fontSize:12},chartArea:{left:20,top:30,width:_0xfc92[10]},legend:_0xfc92[11],bar:{groupWidth:_0xfc92[12]},isStacked:true,colors:[_0xfc92[13],_0xfc92[9]],hAxis:{textStyle:{color:_0xfc92[9],fontSize:10,bold:true}},vAxis:{textPosition:_0xfc92[11]},annotations:{textStyle:{fontSize:18,bold:true}}};let _0xb754x6= new google[_0xfc92[7]].ColumnChart(document[_0xfc92[15]](_0xfc92[14]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[19],function(_0xb754x7){console[_0xfc92[20]](_0xb754x7)});_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5);let _0xb754x8=document[_0xfc92[15]](_0xfc92[22]);if(screen[_0xfc92[23]]< 1024){_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[25])}else {_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[27])}}function callComparationMonths(){let _0xb754x3=getDataJson(_0xfc92[28]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={chartArea:{left:20,top:30,width:_0xfc92[10]},legend:_0xfc92[11],bar:{groupWidth:_0xfc92[12]},isStacked:true,colors:[_0xfc92[13],_0xfc92[9]],hAxis:{textStyle:{color:_0xfc92[9],fontSize:10,bold:true}},vAxis:{textPosition:_0xfc92[11]},annotations:{textStyle:{fontSize:18,bold:true}}};let _0xb754x6= new google[_0xfc92[7]].ColumnChart(document[_0xfc92[15]](_0xfc92[29]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5)}function callByDay(){let _0xb754x3=getDataJson(_0xfc92[30]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={chartArea:{left:20,top:30,width:_0xfc92[10]},legend:_0xfc92[11],bar:{groupWidth:_0xfc92[12]},colors:[_0xfc92[9],_0xfc92[13]],hAxis:{textStyle:{color:_0xfc92[9],fontSize:14,bold:true}},vAxis:{textPosition:_0xfc92[11]}};let _0xb754x6= new google[_0xfc92[7]].ColumnChart(document[_0xfc92[15]](_0xfc92[31]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5)}function satisfactionMonths(){let _0xb754x3=getDataJson(_0xfc92[32]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={title:_0xfc92[33],titleTextStyle:{color:_0xfc92[9],fontSize:14,bold:true},legend:_0xfc92[11],hAxis:{textStyle:{color:_0xfc92[9],fontSize:14,bold:true}},vAxis:{format:_0xfc92[34],gridLines:{count:5}},pointSize:10,lineWidth:5};let _0xb754x6= new google[_0xfc92[7]].LineChart(document[_0xfc92[15]](_0xfc92[35]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5);let _0xb754x8=document[_0xfc92[15]](_0xfc92[36]);if(screen[_0xfc92[23]]< 1024){_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[37])}else {_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[38])}}function satisfactionMonthsInsideSla(){let _0xb754x3=getDataJson(_0xfc92[39]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={title:_0xfc92[33],titleTextStyle:{color:_0xfc92[9],fontSize:14,bold:true},legend:_0xfc92[11],hAxis:{textStyle:{color:_0xfc92[9],fontSize:14,bold:true}},vAxis:{format:_0xfc92[34],gridLines:{count:5}},pointSize:10,lineWidth:5};let _0xb754x6= new google[_0xfc92[7]].LineChart(document[_0xfc92[15]](_0xfc92[40]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5);let _0xb754x8=document[_0xfc92[15]](_0xfc92[41]);if(screen[_0xfc92[23]]< 1024){_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[37])}else {_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[38])}}function callTop10(){let _0xb754x3=getDataJson(_0xfc92[42]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={title:_0xfc92[43],titleTextStyle:{color:_0xfc92[9],fontSize:14,bold:true},chartArea:{left:20,top:30,width:_0xfc92[10]},legend:_0xfc92[11],bar:{groupWidth:_0xfc92[12]},isStacked:true,colors:[_0xfc92[13],_0xfc92[9]],hAxis:{textStyle:{color:_0xfc92[9],fontSize:10,bold:true}},vAxis:{textPosition:_0xfc92[11]},annotations:{textStyle:{fontSize:18,bold:true}}};let _0xb754x6= new google[_0xfc92[7]].ColumnChart(document[_0xfc92[15]](_0xfc92[44]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5);let _0xb754x8=document[_0xfc92[15]](_0xfc92[45]);if(screen[_0xfc92[23]]< 1024){_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[46])}else {_0xb754x8[_0xfc92[26]](_0xfc92[24],_0xfc92[47])}}function drawingsClosedByTypeProblem(){let _0xb754x3=getDataJson(_0xfc92[48]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={is3D:true,pieSliceText:_0xfc92[49],chartArea:{width:_0xfc92[50]}};_0xb754x4[_0xfc92[51]]([{column:1,desc:true}]);let _0xb754x6= new google[_0xfc92[7]].PieChart(document[_0xfc92[15]](_0xfc92[52]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5)}function drawingsClosedByProblem(){let _0xb754x3=getDataJson(_0xfc92[53]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={is3D:true,pieSliceText:_0xfc92[49],chartArea:{width:_0xfc92[50]}};_0xb754x4[_0xfc92[51]]([{column:1,desc:true}]);let _0xb754x6= new google[_0xfc92[7]].PieChart(document[_0xfc92[15]](_0xfc92[54]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5)}function distributionByDepartments(){let _0xb754x3=getDataJson(_0xfc92[48]);let _0xb754x4= new google[_0xfc92[7]].DataTable(_0xb754x3);let _0xb754x5={is3D:true,pieSliceText:_0xfc92[49],chartArea:{width:_0xfc92[50]}};_0xb754x4[_0xfc92[51]]([{column:1,desc:true}]);let _0xb754x6= new google[_0xfc92[7]].PieChart(document[_0xfc92[15]](_0xfc92[55]));google[_0xfc92[7]][_0xfc92[18]][_0xfc92[17]](_0xb754x6,_0xfc92[16],countDrawCharts);_0xb754x6[_0xfc92[21]](_0xb754x4,_0xb754x5)}function getDataJson(_0xb754x12){let _0xb754x3=[];let _0xb754x13= new XMLHttpRequest();_0xb754x13[_0xfc92[57]](_0xfc92[56],_0xb754x12,false);_0xb754x13[_0xfc92[58]](null);if(_0xb754x13[_0xfc92[59]]=== 200){_0xb754x3= _0xb754x13[_0xfc92[60]]};return _0xb754x3}