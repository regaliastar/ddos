$(document).ready(function(){
  var Chart1 = echarts.init(document.getElementById('largeFlowSource'));
  var option1 = {
              title: {
                  text: '最大流量来源'
              },
              tooltip: {},
              legend: {
                  data:['销量']
              },
              series: [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius: '55%',
                      roseType: 'angle',
                      data:[
                          {value:'30.4%', name:'视频广告'},
                          {value:'20.6%', name:'联盟广告'},
                          {value:'20.5%', name:'邮件营销'},
                          {value:'14.5%', name:'直接访问'},
                          {value:'14%', name:'搜索引擎'}
                      ]
                  }
              ]
          };
        Chart1.setOption(option1);
  /*Chart1.setOption({
    series :
  });*/
  var Chart2 = echarts.init(document.getElementById('protocol'));
  var option2 = {
              title: {
                  text: '协议'
              },
              tooltip: {},
              legend: {
                  data:['销量']
              },
              series: [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius: '55%',
                      roseType: 'angle',
                      data:[
                          {value:85, name:'HTTP'},
                          {value:190, name:'FTP'},
                          {value:55, name:'ICMP'},
                          {value:88, name:'IPv6'},
                          {value:48, name:'MIME'},
                          {value:20, name:'SMTP'},
                          {value:10, name:'LMTP'}
                      ]
                  }
              ]
          };
  Chart2.setOption(option2);



})
