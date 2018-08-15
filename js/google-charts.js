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