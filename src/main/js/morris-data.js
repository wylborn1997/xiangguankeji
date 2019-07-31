// Dashboard 1 Morris-chart
$(function () {
    "use strict";
    
Morris.Area({
        element: 'morris-area-chart',
        data: [{
            date: '11',
            '空气温度': 20 ,
            '土壤温度':19,
        }, {
            date: '12',
            '空气温度': 24,
            '土壤温度':19,
        }, {
            date: '13',
            '空气温度': 30,
            '土壤温度':19,
        }, {
            date: '14',
            '空气温度': 25,
            '土壤温度':19,
        }, {
            date: '15',
            '空气温度': 19,
            '土壤温度':19,
        }, {
            date: '16',
            '空气温度': 23,
            '土壤温度':19,
        },
         {
            date: '17',
            '空气温度': 24,
            '土壤温度':19,
            
        }],
        xkey: 'date',
        ykeys: ['空气温度','土壤温度'],
        labels: ['空气温度','土壤温度' ],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['#55ce63','#336699' ],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#55ce63' ,'336699'],
        resize: true
        
    });
    Morris.Area({
        element: 'morris-area-humid',
        data: [{
            date: '11',
            '空气湿度': 88 ,
            '土壤湿度':99,
        }, {
            date: '12',
            '空气湿度': 94,
            '土壤湿度':99,
        }, {
            date: '13',
            '空气湿度': 90,
            '土壤湿度':99,
        }, {
            date: '14',
            '空气湿度': 95,
            '土壤湿度':98,
        }, {
            date: '15',
            '空气温度': 78,
            '土壤湿度':99,
        }, {
            date: '16',
            '空气温度': 93,
            '土壤湿度':89,
        },
         {
            date: '17',
            '空气湿度': 84,
            '土壤湿度':99,
            
        }],
        xkey: 'date',
        ykeys: ['空气湿度','土壤湿度'],
        labels: ['空气湿度','土壤湿度' ],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['#55ce63','#336699' ],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#55ce63' ,'336699'],
        resize: true
        
    });
 Morris.Area({
        element: 'extra-area-chart',
        data: [{
                    date: '10',
                    空气温度: 0,
                    土壤温度: 0,
                    降雨量: 0
                }, {
                    date: '11',
                    空气温度: 50,
                    土壤温度: 15,
                    降雨量: 5
                }, {
                    date: '12',
                    空气温度: 20,
                    土壤温度: 50,
                    降雨量: 65
                }, {
                    date: '13',
                    空气温度: 60,
                    土壤温度: 12,
                    降雨量: 7
                }, {
                    date: '14',
                    空气温度: 30,
                    土壤温度: 20,
                    降雨量: 120
                }, {
                    date: '15',
                    空气温度: 25,
                    土壤温度: 80,
                    降雨量: 40
                }, {
                    date: '16',
                    空气温度: 10,
                    土壤温度: 10,
                    降雨量: 10
                }


                ],
                lineColors: ['#55ce63', '#2f3d4a', '#009efb'],
                xkey: 'date',
                ykeys: ['空气温度', '土壤温度', '降雨量'],
                labels: ['Site A', 'Site B', 'Site C'],
                pointSize: 0,
                lineWidth: 0,
                resize:true,
                fillOpacity: 0.8,
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                hideHover: 'auto'
        
    });
 });    