"use strict";

var passengerFlowData = [];
/*
 * 实时向服务器请求数据
 * passengerFlowData : [] --> 用于存取数据 [['1997/07/06', 626],['1992/01/06',677]]
 */



/*
 * 图表1
 */
// 基于准备好的dom，初始化echarts实例


/****************************************
 *
 *
 *
 *****************************************/
/*
 * 图表2
 */
// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.getElementById('realTimeUpFlow'));

// 指定图表的配置项和数据
function randomData2() {
	//now = new Date(+now + oneDay);
	var mydate = new Date();
	value = value + Math.random() * 21 - 10;
	var result = {
		name: 'name',
		value: [
            [mydate.getHours(), mydate.getMinutes(), mydate.getSeconds()].join(':'),
            Math.round(value)
        ]
	};
	//console.log(result);
	return result;
}

var data = [];
//var now = +new Date(2015, 5, 22);
//mydate
//var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 100; i++) {
	data.push(randomData2());
}

var option = {
	title: {
		text: '实时上行流量动态折线图'
	},
	tooltip: {
		trigger: 'axis',
		formatter: function (params) {
			//params = params[0];
			var date = new Date(params[0].name);
			return date.getDate() + '/' + (date.getMonth() + 1) + '/' + ' : ' + params[0].value[1];
		},
		axisPointer: {
			animation: false
		}
	},
	xAxis: {
		type: 'time',
		splitLine: {
			show: false
		}
	},
	yAxis: {
		type: 'value',
		boundaryGap: [0, '100%'],
		splitLine: {
			show: true
		}
	},
	series: [{
		name: '实时上行流量数据',
		type: 'line',
		showSymbol: false,
		hoverAnimation: false,
		data: data,
		lineStyle: {
			normal: {
				color: '#ED801C'
			}
		},
    }]
};

setInterval(function () {
	for (var i = 0; i < 5; i++) {
		data.shift();
		data.push(randomData2());
	}

	myChart2.setOption({
		series: [{
			data: data
		}]
	});
}, 1000);

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option);
