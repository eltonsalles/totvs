document.addEventListener('DOMContentLoaded', function () {
    callLevelOfSatisfaction();
    callCalledClosed();
    calledClosureRegion();
});

function callLevelOfSatisfaction() {
    var value = 76;
    var myConfig = {
        gui: {
            behaviors: [
                {
                    id: "Reload",
                    enabled: "none"
                },
                {
                    id: "SaveAsImage",
                    enabled: "none"
                },
                {
                    id: "DownloadPDF",
                    enabled: "none"
                },
                {
                    id: "DownloadSVG",
                    enabled: "none"
                },
                {
                    id: "Print",
                    enabled: "none"
                },
                {
                    id: "ViewSource",
                    enabled: "none"
                }
            ]
        },
        type: "gauge",
        globals: {
            fontSize: 26
        },
        plotarea: {
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        plot: {
            size: '100%',
            valueBox: {
                placement: 'center',
                offsetY: -20,
                text: '%v',
                fontSize: 36,
                rules: [
                    {
                        rule: '%v >= 70',
                        text: '%v%'
                    },
                    {
                        rule: '%v > 50 && %v < 70',
                        text: '%v%'
                    },
                    {
                        rule: '%v > 40 && %v <= 50',
                        text: '%v%'
                    },
                    {
                        rule: '%v <= 40',
                        text: '%v%'
                    }
                ]
            }
        },
        tooltip: {
            borderRadius: 5
        },
        scaleR: {
            aperture: 180,
            minValue: 0,
            maxValue: 100,
            step: 10,
            center: {
                visible: false
            },
            tick: {
                visible: false
            },
            item: {
                offsetR: 0,
                rules: [
                    {
                        rule: '%i == 9',
                        offsetX: 1
                    }
                ],
                fontSize: 10
            },
            labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
            ring: {
                size: 50,
                rules: [
                    {
                        rule: '%v <= 30',
                        backgroundColor: '#E53834'
                    },
                    {
                        rule: '%v > 30 && %v <= 50',
                        backgroundColor: '#F47920'
                    },
                    {
                        rule: '%v > 50 && %v < 70',
                        backgroundColor: '#FBB160'
                    },
                    {
                        rule: '%v >= 70',
                        backgroundColor: '#82C342'
                    }
                ]
            }
        },
        series: [
            {
                values: [value], // Valor de Satisfação
                backgroundColor: '#015374',
                indicator: [10, 10, 10, 10, 0.65],
                animation: {
                    effect: 2,
                    method: 4,
                    sequence: 4,
                    speed: 900
                }
            }
        ]
    };

    zingchart.render({
        id: 'call-level-of-satisfaction',
        data: myConfig,
        height: 510,
        width: '100%',
        events: {
            load: function () {
                countDrawCharts();
            }
        }
    });

    labelSatisfaction('call-zing-charts-quality-service', value);
}

function callCalledClosed() {
    var value = 57;
    var myConfig = {
        gui: {
            behaviors: [
                {
                    id: "Reload",
                    enabled: "none"
                },
                {
                    id: "SaveAsImage",
                    enabled: "none"
                },
                {
                    id: "DownloadPDF",
                    enabled: "none"
                },
                {
                    id: "DownloadSVG",
                    enabled: "none"
                },
                {
                    id: "Print",
                    enabled: "none"
                },
                {
                    id: "ViewSource",
                    enabled: "none"
                }
            ]
        },
        type: "gauge",
        globals: {
            fontSize: 26
        },
        plotarea: {
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        plot: {
            size: '100%',
            valueBox: {
                placement: 'center',
                offsetY: -20,
                text: '%v',
                fontSize: 36,
                rules: [
                    {
                        rule: '%v >= 70',
                        text: '%v%'
                    },
                    {
                        rule: '%v > 50 && %v < 70',
                        text: '%v%'
                    },
                    {
                        rule: '%v > 40 && %v <= 50',
                        text: '%v%'
                    },
                    {
                        rule: '%v <= 40',
                        text: '%v%'
                    }
                ]
            }
        },
        tooltip: {
            borderRadius: 5
        },
        scaleR: {
            aperture: 180,
            minValue: 0,
            maxValue: 100,
            step: 10,
            center: {
                visible: false
            },
            tick: {
                visible: false
            },
            item: {
                offsetR: 0,
                rules: [
                    {
                        rule: '%i == 9',
                        offsetX: 1
                    }
                ],
                fontSize: 10
            },
            labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
            ring: {
                size: 50,
                rules: [
                    {
                        rule: '%v <= 30',
                        backgroundColor: '#E53834'
                    },
                    {
                        rule: '%v > 30 && %v <= 50',
                        backgroundColor: '#F47920'
                    },
                    {
                        rule: '%v > 50 && %v < 70',
                        backgroundColor: '#FBB160'
                    },
                    {
                        rule: '%v >= 70',
                        backgroundColor: '#82C342'
                    }
                ]
            }
        },
        series: [
            {
                values: [value], // Valor de Satisfação
                backgroundColor: '#015374',
                indicator: [10, 10, 10, 10, 0.65],
                animation: {
                    effect: 2,
                    method: 4,
                    sequence: 4,
                    speed: 900
                }
            }
        ]
    };

    zingchart.render({
        id: 'call-called-closed',
        data: myConfig,
        height: 510,
        width: '100%',
        events: {
            load: function () {
                countDrawCharts();
            }
        }
    });

    labelSatisfaction('call-zing-charts-called-closed', value);
}

function calledClosureRegion() {
    var listOfStatesLonLat = [
        {uf: "AC", x: "-69.2lon", y: "-9.8lat", size: 0},
        {uf: "AL", x: "-36.6127lon", y: "-9.5230lat", size: 0},
        {uf: "AM", x: "-64.6976lon", y: "-4.1991lat", size: 0},
        {uf: "AP", x: "-51.9739lon", y: "1.4511lat", size: 0},
        {uf: "BA", x: "-41.7254lon", y: "-12.4614lat", size: 0},
        {uf: "CE", x: "-39.6142lon", y: "-5.0955lat", size: 0},
        {uf: "DF", x: "-47.7980lon", y: "-15.7815lat", size: 0},
        {uf: "ES", x: "-40.6765lon", y: "-19.6247lat", size: 0},
        {uf: "GO", x: "-49.5949lon", y: "-16.0194lat", size: 0},
        {uf: "MA", x: "-45.2865lon", y: "-5.0766lat", size: 0},
        {uf: "MG", x: "-44.6734lon", y: "-18.4569lat", size: 0},
        {uf: "MS", x: "-54.8544lon", y: "-20.2960lat", size: 0},
        {uf: "MT", x: "-55.9326lon", y: "-12.9359lat", size: 0},
        {uf: "PA", x: "-53.0610lon", y: "-3.9705lat", size: 0},
        {uf: "PB", x: "-36.8606lon", y: "-7.1406lat", size: 0},
        {uf: "PE", x: "-38.0033lon", y: "-8.3228lat", size: 0},
        {uf: "PI", x: "-43.2lon", y: "-8lat", size: 0},
        {uf: "PR", x: "-51.6176lon", y: "-24.6401lat", size: 0},
        {uf: "RJ", x: "-42.6767lon", y: "-22.2008lat", size: 0},
        {uf: "RN", x: "-36.6766lon", y: "-5.8520lat", size: 0},
        {uf: "RO", x: "-62.8449lon", y: "-10.9238lat", size: 0},
        {uf: "RR", x: "-61.3827lon", y: "2.1088lat", size: 0},
        {uf: "RS", x: "-53.2504lon", y: "-29.7894lat", size: 0},
        {uf: "SC", x: "-50lon", y: "-27.2lat", size: 0},
        {uf: "SE", x: "-37.4354lon", y: "-10.5901lat", size: 0},
        {uf: "SP", x: "-48.7385lon", y: "-22.2625lat", size: 0},
        {uf: "TO", x: "-48.3213lon", y: "-10.1514lat", size: 0}
    ];

    var myConfig = {
        shapes: [
            {
                type: 'zingchart.maps',
                options: {
                    name: 'bra',
                    zooming: false,
                    panning: false,
                    scrolling: false,
                    zoom: .8,
                    style: {
                        controls: {
                            visible: false
                        },
                        backgroundColor: '#109618'
                    }
                }
            }
        ]
    };

    listOfStatesLonLat.forEach(function (state) {
        var obj = {
            map: 'bra',
            type: 'circle',
            backgroundColor: '#efd843',
            fillType: 'radial',
            alpha: 0.7,
            x: state.x,
            y: state.y,
            size: Math.floor(Math.random() * 20 + 1)
        };

        myConfig.shapes.push(obj);
    });

    zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
    zingchart.loadModules('maps, maps-bra', function() {
        zingchart.render({
            id: 'call-called-closure-region',
            data: myConfig,
            height: 510,
            width: '100%',
            events: {
                load: function () {
                    countDrawCharts();
                }
            }
        });
    });
}

function labelSatisfaction(id, value) {
    var label = document.querySelector('#' + id);
    if (value <= 40) {
        label.innerText = "Ruim";
    } else if (value > 40 && value <= 50) {
        label.innerText = "Regular";
    } else if (value > 50 && value < 70) {
        label.innerText = "Bom";
    } else if (value >= 70) {
        label.innerText = "Ótimo";
    }
}