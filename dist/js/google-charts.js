var numberDrawCharts = 0;

google.charts.load('45', {packages: ['corechart', 'line']});
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
    var dataJson = getDataJson("json/call-open.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
        title: 'Nº de Chamados Abertos',
        titleTextStyle: {
            color: '#015374',
            fontSize: 12
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

    var chart = new google.visualization.ColumnChart(document.querySelector('#call-graphic-open'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    google.visualization.events.addListener(chart, 'click', function (targetID) {
        console.log(targetID);
    });
    chart.draw(data, options);

    var title = document.querySelector('#call-graphic-open > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '730');
    } else {
        title.setAttribute('x', '410');
    }
}

function callComparationMonths() {
    var dataJson = getDataJson("json/call-comparation-months.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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

    var chart = new google.visualization.ColumnChart(document.querySelector('#call-graphic-comparation'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function callByDay() {
    var dataJson = getDataJson("json/call-by-day.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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

    var chart = new google.visualization.ColumnChart(document.querySelector('#call-graphic-by-day'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function satisfactionMonths() {
    var dataJson = getDataJson("json/satisfaction-months.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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
            },
            minTextSpacing: 20
        },
        vAxis: {
            format: '##,##%',
            gridLines: {
                count: 5
            }
        },
        pointSize: 10,
        lineWidth: 5,
        chartArea: {
            width: '90%',
            left: '10%'
        }
    };

    var chart = new google.visualization.LineChart(document.querySelector('#call-level-of-satisfaction-months'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);

    var title = document
        .querySelector('#call-level-of-satisfaction-months > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '525');
    } else {
        title.setAttribute('x', '300');
    }
}

function satisfactionMonthsInsideSla() {
    var dataJson = getDataJson("json/satisfaction-months-inside-sla.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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
            },
            minTextSpacing: 20
        },
        vAxis: {
            format: '##,##%',
            gridLines: {
                count: 5
            }
        },
        pointSize: 10,
        lineWidth: 5,
        chartArea: {
            width: '90%',
            left: '10%'
        }
    };

    var chart = new google.visualization.LineChart(document.querySelector('#call-called-closed-months'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);

    var title = document
        .querySelector('#call-called-closed-months > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '525');
    } else {
        title.setAttribute('x', '300');
    }
}

function callTop10() {
    var dataJson = getDataJson("json/call-top-10.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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

    var chart = new google.visualization.ColumnChart(document.querySelector('#call-top-10'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);

    var title = document.querySelector('#call-top-10 > div > div > div > svg > g:nth-of-type(1) > text');
    if (screen.width < 1024) {
        title.setAttribute('x', '760');
    } else {
        title.setAttribute('x', '860');
    }
}

function drawingsClosedByTypeProblem() {
    var dataJson = getDataJson("json/call-closed-by-type.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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

    var chart = new google.visualization.PieChart(document.querySelector('#call-closed-by-type'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function drawingsClosedByProblem() {
    var dataJson = getDataJson("json/call-closed-by-problem.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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

    var chart = new google.visualization.PieChart(document.querySelector('#call-closed-by-problem'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function distributionByDepartments() {
    var dataJson = getDataJson("json/call-closed-by-type.json");
    var data = new google.visualization.DataTable(dataJson);

    var options = {
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

    var chart = new google.visualization.PieChart(document.querySelector('#call-distribution-by-departments'));
    google.visualization.events.addListener(chart, 'ready', countDrawCharts);
    chart.draw(data, options);
}

function getDataJson(url) {
    var dataJson = [];
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);
    xhr.send(null);

    if (xhr.status === 200) {
        dataJson = xhr.responseText;
    }

    return dataJson;
}
